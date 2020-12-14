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
  UIManager,
  LayoutAnimation,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EmojiBoard from 'react-native-emoji-board';
import {AttachModal} from '../../Components';
import styles from '../ChatScene/style';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import {useHeaderHeight} from '@react-navigation/stack';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ChatScene = ({navigation, route}) => {
  const headerHeight = useHeaderHeight();
  const {user, chatId} = route.params;
  const [messages, setMessages] = useState([]);
  const [writtenMessage, setWrittenMessage] = useState(null);
  const [attachPressed, setAttachPressed] = useState(false);
  const textRef = useRef(null);
  const [textInputFocus, setTextInputFocus] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const onClick = (emoji) => {
    setWrittenMessage((message) => message + emoji.code);
  };

  const backspace = () => {};

  const onInputFocus = () => {
    if (Platform.OS == 'android') {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    } else {
      Keyboard.scheduleLayoutAnimation(LayoutAnimation.Presets.easeInEaseOut);
    }
    setShowEmoji(false);
  };

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

  const renderItem = ({item}) => {
    return <ChatNode item={item} />;
  };

  const sendMessage = () => {
    if (!writtenMessage) return;
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

  const keyboardIconPress = () => {
    if (Platform.OS == 'android') {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    } else {
      Keyboard.scheduleLayoutAnimation(LayoutAnimation.Presets.easeInEaseOut);
    }
    if (!showEmoji) {
      Keyboard.dismiss();
      setShowEmoji(true);
    } else {
      textRef.current.focus();
      setShowEmoji(false);
    }
  };
  const onChangeText = (text) => {
    setWrittenMessage(text);
  };

  return (
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
                onPress={() => keyboardIconPress()}
                style={styles.emoji}
                name={showEmoji ? 'keyboard' : 'emoji-happy'}
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
                onFocus={onInputFocus}
                multiline
              />

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
        </ImageBackground>
        <EmojiBoard
          showBoard={showEmoji}
          tabBarPosition="top"
          onClick={onClick}
          categoryIconSize={22}
          containerStyle={{
            height: showEmoji ? 300 : 0,
            backgroundColor: 'white',
            position: 'relative',
          }}
          onRemove={backspace}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
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