import React, {useState, useRef, useLayoutEffect, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  FlatList,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AttachModal} from '../../Components';
import styles from '../ChatScene/style';
import {consts} from '../../Assets/Consts';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
const ChatScene = ({navigation, route}) => {
  const {user, chatId} = route.params;
  const [messages, setMessages] = useState([]);
  const [show, setShow] = useState(false);
  const [textInputFocus, setTextInputFocus] = useState(false);
 


  function HeaderIcons() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Ionicons
          onPress={() => navigation.navigate('VideoCalling')}
          name="videocam"
          size={24}
          color="white"
          style={{paddingRight: 10}}
        />
        <FontAwesome
          onPress={() => navigation.navigate('CallingScreen')}
          name="phone"
          size={24}
          color="white"
          style={{paddingRight: 10}}
        />
        <Entypo
          name="dots-three-vertical"
          size={24}
          color="white"
          style={{paddingRight: 10}}
        />
      </View>
    );
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: user.displayName ?? user.phoneNumber,
      headerRight: () => {
        return <HeaderIcons />;
      },
      headerStyle: {
        backgroundColor: '#075e54',
        elevation: 0,
      },
      headerTintColor: 'white',
    });
  });

  useEffect(() => {
    return database()
      .ref()
      .child('messages')
      .orderByChild('chatId')
      .equalTo(chatId)
      .on('value', (snapshot) => {
        if (!snapshot) {
          return;
        }
        const value = snapshot.val();
        let formatedValues = [];
        Object.keys(value ?? {}).forEach((item) => {
          formatedValues.push({...value[item], id: item});
        });
        formatedValues.sort((a, b) => a.time - b.time);
        setMessages(formatedValues);
      });
  }, []);
  const [writtenMessage, setWrittenMessage] = useState(null);
  const [attachPressed, setAttachPressed] = useState(false);
  const textRef = useRef(null);
  const scrollViewRef = useRef(null);

  const Item = ({item, onPress}) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.item,
        {
          alignSelf:
            item.uid == auth().currentUser.uid ? 'flex-end' : 'flex-start',
        },
        {
          backgroundColor:
            item.uid == auth().currentUser.uid ? '#dcf8c6' : 'white',
        },
      ]}>
      <Text style={styles.title}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  const sendMessage = () => {
    Keyboard.dismiss();
    setTextInputFocus(false)
    database().ref('messages').push({
      message: writtenMessage,
      time: database.ServerValue.TIMESTAMP,
      status: 0,
      uid: auth().currentUser.uid,
      chatId,
    });
    database()
      .ref('userChat')
      .child(user.uid)
      .child(chatId)
      .update({
        lastMessage: {
          message: writtenMessage,
          time: database.ServerValue.TIMESTAMP,
          status: 0,
          uid: auth().currentUser.uid,
        },
      });
    database()
      .ref('userChat')
      .child(auth().currentUser.uid)
      .child(chatId)
      .update({
        lastMessage: {
          message: writtenMessage,
          time: database.ServerValue.TIMESTAMP,
          status: 0,
          uid: auth().currentUser.uid,
        },
      });
      setWrittenMessage('');
  };

  const onChangeText = (text) => {
    setWrittenMessage(text);
  };
  const attachOnPress = () => {
    if (attachPressed == true) {
      setAttachPressed(false);
    } else {
      setAttachPressed(true);
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      contentContainerStyle={styles.scrollViewContainer}
      ref={scrollViewRef}>
      <StatusBar backgroundColor="#075e54" barStyle="light-content" />
      <ImageBackground
        source={require('../../Assets/chatBackground.png')}
        style={styles.image}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
          
        <View>
          {attachPressed ? (
            <AttachModal setModalVisible={attachPressed} />
          ) : null}
          <ScrollView
            keyboardShouldPersistTaps="always"
            style={styles.bottomContainer}
            // contentContainerStyle={styles.contentContainerStyle}
          >
            <View style={styles.textinputContainer}>
              <TouchableOpacity style={styles.emoji} onPress={()=>setShow(show==true?false:true)}>
                <Entypo
                  name="emoji-happy"
                  size={consts.textSizes(25)}
                  color="grey"
                />
              </TouchableOpacity>
              <TextInput
                placeholder="Type a message ...."
                multiline={true}
                onFocus={()=>setTextInputFocus(true)}
                style={styles.textinput}
                onChangeText={(text) => onChangeText(text)}
                placeholderStyle={{fontSize: 20}}
                ref={textRef}
                value={writtenMessage}
                returnKeyType="none"
              />

              <TouchableOpacity
                style={styles.attach}
                onPress={() => attachOnPress()}>
                <FontAwesome
                  name="paperclip"
                  size={consts.textSizes(23)}
                  color="grey"
                />
              </TouchableOpacity>
              {textInputFocus==false?<View style={styles.camera}>
                <FontAwesome
                  name="camera"
                  size={consts.textSizes(20)}
                  color="grey"
                />
              </View>:null}
            </View>
         
            <TouchableOpacity
              style={styles.sendContainer}
              onPress={() => sendMessage()}>
              <Ionicons
                name="send"
                size={consts.textSizes(20)}
                color="white"
                style={{
                  alignSelf: 'flex-start',
                  paddingLeft: 5,
                }}
              />
            </TouchableOpacity>
          </ScrollView>
          
        
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default ChatScene;
