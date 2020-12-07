import React, {
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';
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
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

import {AttachModal} from '../../Components';
import styles from '../ChatScene/style';
import {consts} from '../../Assets/Consts';
// import database from '@react-native-firebase/database';
// import { View } from 'native-base';
// const userRef = database().ref('/users/vis');
// let userRef = this.database.ref('users/' + userId);

const ChatScene = (props) => {
  const navigation = useNavigation();
  var initialMessages = [
    {id: '0', title: 'hello ...', user: 'neha'},
    {id: '1', title: 'Good morning..how are you?', user: 'myself'},
  ];
  const [messages, setMessages] = useState(initialMessages);
  const [text, setText] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [typingState, setTypingState] = useState('online');
  const [textinputValue, setTextinputValue] = useState('online');
  const [writtenMessage, setWrittenMessage] = useState(null);
  const [attachPressed, setAttachPressed] = useState(false);
  const [onChangingText, setonChangingText] = useState(false);
  const textRef = useRef(null);
  const scrollViewRef = useRef(null);

  // const HeaderIcons = (<View style={{ flexDirection: "row" }}>
  //         <Ionicons onPress={() => alert('search')} name="search" size={24} color="white" style={{ paddingRight: 10 }} />
  // </View>)

  function HeaderIcons(props) {
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
          // onPress={() => alert('search')}
          onPress={() => navigation.navigate('CallingScreen')}
          name="phone"
          size={24}
          color="white"
          style={{paddingRight: 10}}
        />
        <Entypo
          // onPress={() => alert('search')}
          // onPress={() => props.navigation.navigate('')}
          name="dots-three-vertical"
          size={24}
          color="white"
          style={{paddingRight: 10}}
        />
      </View>
    );
  }
  useLayoutEffect(() => {
    const name = props.route.params.title
      ? props.route.params.title
      : 'not saved';
    props.navigation.setOptions({
      headerTitle: name,
      headerRight: () => {
        return <HeaderIcons />;
      },
      headerStyle: {
        backgroundColor: '#075e54',
        // backgroundColor: contactSearchpress ? 'white' : '#075e54',
        elevation: 0,
      },
      headerTintColor: 'white',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
  const Item = ({item, onPress, style}) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.item,
        {
          alignSelf: item.user == 'myself' ? 'flex-end' : 'flex-start',
        },
        {backgroundColor: item.user == 'myself' ? '#dcf8c6' : 'white'},
      ]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    return <Item item={item} />;
  };

  const sendMessage = () => {
    Keyboard.dismiss();
    const textstate = writtenMessage;
    const id = Array.isArray(messages)
      ? `msgUNIQITEM${messages.length}`
      : 'msgUNIQITEM0';
    setMessages([...messages, {id, title: textstate.trim(), user: 'myself'}]);
    setWrittenMessage('');
    // userRef.push({
    //         "message": writtenMessage
    // })
  };

  const onChangeText = (text) => {
    setWrittenMessage(text);
    setonChangingText(true);
  };
  const attachOnPress = (text) => {
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
      // style={styles.container}
      ref={scrollViewRef}>
      <StatusBar backgroundColor="#075e54" barStyle="light-content" />
      <ImageBackground
        source={require('../../Assets/chatBackground.png')}
        style={styles.image}>
        <FlatList
          // inverted={true}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={messages}
        />
        <View>
          {attachPressed ? (
            <AttachModal setModalVisible={attachPressed} />
          ) : null}
          <ScrollView
            keyboardShouldPersistTaps="always"
            style={styles.bottomContainer}
            contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.textinputContainer}>
              <View style={styles.emoji}>
                <Entypo
                  name="emoji-happy"
                  size={consts.textSizes(25)}
                  color="grey"
                />
              </View>
              <TextInput
                placeholder="Type a message ...."
                style={styles.textinput}
                onChangeText={(text) => onChangeText(text)}
                placeholderStyle={{fontSize: 20}}
                ref={textRef}
                value={writtenMessage}
                returnKeyType="none"
                // onSubmit={() => Keyboard.dismiss()}
              />

              <TouchableOpacity
                style={styles.attach}
                onPress={() => attachOnPress()}>
                <FontAwesome
                  name="paperclip"
                  size={consts.textSizes(23)}
                  color="grey"
                  // style={{ paddingRIght: 15 }}
                />
              </TouchableOpacity>
              <View style={styles.camera}>
                <FontAwesome
                  name="camera"
                  size={consts.textSizes(20)}
                  color="grey"
                  // style={{ paddingRIght: 15 }}
                />
              </View>
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
