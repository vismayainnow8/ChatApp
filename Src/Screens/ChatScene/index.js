import React, {useState, useRef, useLayoutEffect, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Keyboard,
  Platform,
  FlatList,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EmojiBoard from 'react-native-emoji-board'
import {AttachModal} from '../../Components';
import styles from '../ChatScene/style';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import {useHeaderHeight} from '@react-navigation/stack';

const ChatScene = ({navigation, route}) => {
  const headerHeight = useHeaderHeight();
  const {user, chatId} = route.params;
  const [messages, setMessages] = useState([]);
<<<<<<< HEAD
  const [keyboardIcon, setKeyboardIcon] = useState(false);
  const [textInputFocus, setTextInputFocus] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const onClick = emoji => {
      console.log(emoji);
    // writtenMessage.piu
    
  };
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
=======

>>>>>>> 5a5501271424eb8e1a6f9a7a46fb1fb11eabd447
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: user.displayName ?? user.phoneNumber,
      // headerRight: () => {
      //   return <HeaderIcons />;
      // },
      headerStyle: {
        backgroundColor: '#075e54',
        elevation: 0,
      },
      headerTintColor: 'white',
    });
  }, []);

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
        formatedValues.sort((a, b) => b.time - a.time);
        setMessages(formatedValues);
      });
  }, []);
  const [writtenMessage, setWrittenMessage] = useState(null);
  const [attachPressed, setAttachPressed] = useState(false);
  const textRef = useRef(null);

  const renderItem = ({item}) => {
    return <ChatNode item={item} />;
  };

  const sendMessage = () => {
<<<<<<< HEAD
    Keyboard.dismiss();
    setTextInputFocus(false)
=======
    if (!writtenMessage) return;
>>>>>>> 5a5501271424eb8e1a6f9a7a46fb1fb11eabd447
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

  const keyboardIconPress = () => {

    if (keyboardIcon == "emoji-happy") {
      setKeyboardIcon('keyboard')
      textRef.current.focus()
      setShowEmoji(false)
    }
    else {
      Keyboard.dismiss()
      setKeyboardIcon("emoji-happy")
      setShowEmoji(true)

    }
 }
  return (
<<<<<<< HEAD
    <View style={styles.scrollViewContainer}>
      <StatusBar backgroundColor="#075e54" barStyle="light-content" />
      <ImageBackground
        source={require('../../Assets/chatBackground.png')}
        style={styles.image}>
        <View style={{flex: 1}}>
          <FlatList
            style={{flexGrow: 0}}
            keyboardShouldPersistTaps="always"
            inverted={true}
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        {attachPressed ? <AttachModal setModalVisible={attachPressed} /> : null}
        <View style={styles.bottomContainer}>
          <View style={styles.textinputContainer}>
          <TouchableOpacity style={styles.emoji} onPress={()=>keyboardIconPress()}>
                <Entypo
                  name={keyboardIcon}
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
=======
    <SafeAreaView style={styles.scrollViewContainer}>
      <KeyboardAvoidingView
        style={styles.scrollViewContainer}
        keyboardVerticalOffset={headerHeight}
        behavior={Platform.OS === 'ios' ? 'padding' : 'null'}>
        <StatusBar backgroundColor="#075e54" barStyle="light-content" />
        <ImageBackground
          source={require('../../Assets/chatBackground.png')}
          style={styles.image}>
          <View style={{flex: 1}}>
            <FlatList
              style={{flexGrow: 0}}
              keyboardShouldPersistTaps="handled"
              inverted={true}
              data={messages}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          {attachPressed ? (
            <AttachModal setModalVisible={attachPressed} />
          ) : null}
          <View style={styles.bottomContainer}>
            <View style={styles.textinputContainer}>
              <Entypo
                onPress={() => alert('test')}
                style={styles.emoji}
                name="emoji-happy"
                size={28}
                color="grey"
              />
              <TextInput
                placeholder="Type a message ...."
                style={styles.textinput}
                onChangeText={(text) => onChangeText(text)}
                placeholderStyle={{fontSize: 20}}
                ref={textRef}
                value={writtenMessage}
                multiline
              />
>>>>>>> 5a5501271424eb8e1a6f9a7a46fb1fb11eabd447

              {/* <TouchableOpacity
              style={styles.attach}
              onPress={() => attachOnPress()}>
              <FontAwesome
              name="paperclip"
              size={consts.textSizes(23)}
              color="grey"
              />
              </TouchableOpacity>
              <View style={styles.camera}>
              <FontAwesome
              name="camera"
              size={consts.textSizes(20)}
              color="grey"
              />
            </View> */}
            </View>
            <TouchableOpacity
              style={styles.sendContainer}
              onPress={() => sendMessage()}>
              <Ionicons
                name="send"
                size={24}
                color="white"
                style={{
                  height: 24,
                  width: 24,
                }}
              />
            </TouchableOpacity>
          </View>
<<<<<<< HEAD
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
          {showEmoji == true ?
          <EmojiBoard showBoard={showEmoji}
          tabBarPosition='top'
          onClick={onClick}
            categoryIconSize={22}
            containerStyle={{backgroundColor:"white",position:"relative"}}
          />:null}
        </View>
        
      </ImageBackground>
    </View>
=======
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
>>>>>>> 5a5501271424eb8e1a6f9a7a46fb1fb11eabd447
  );
};

export default ChatScene;

const ChatNode = ({item, onPress}) => {
  const isMine = item.uid == auth().currentUser.uid;
  const derivedContainerStyle = isMine
    ? {
        alignSelf: 'flex-end',
        backgroundColor: '#dcf8c6',
      }
    : {
        alignSelf: 'flex-start',
        backgroundColor: 'white',
      };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.chatNode, derivedContainerStyle]}>
      <Text style={styles.title}>{item.message}</Text>
      <Text style={styles.chatNodeTime}>
        {moment(item.time).format('h:mm a')}
      </Text>
    </TouchableOpacity>
  );
};
