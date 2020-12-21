import React, {useState, useRef, useLayoutEffect, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Keyboard,
  Platform,
  FlatList,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import EmojiBoard from 'react-native-emoji-board';
import {AttachModal} from '../../Components';
import styles from '../ChatScene/style';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useHeaderHeight} from '@react-navigation/stack';
import {ChatInput, ChatNode} from './Components';

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
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [replyMessage, setReplyMessage] = useState(null);
  const [writtenMessage, setWrittenMessage] = useState(null);
  const [attachPressed, setAttachPressed] = useState(false);
  const textRef = useRef(null);
  const [showEmoji, setShowEmoji] = useState(false);

  const onClick = (emoji) => {
    setWrittenMessage((writtenMessage ?? '') + emoji.code);
  };

  const backspace = () => {
    setWrittenMessage(writtenMessage.slice(0, -1));
  };

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

  const toggleSelect = (id) => {
    const index = selectedMessages.indexOf(id);
    if (index > -1) {
      setSelectedMessages(selectedMessages.filter((item) => item !== id));
    } else {
      setSelectedMessages([...selectedMessages, id]);
    }
  };

  const onPressChatNode = (id) => {
    if (selectedMessages.length) {
      return toggleSelect(id);
    }
  };

  const renderItem = ({item}) => {
    const replyMessage = messages.find((message) => message.id == item.replyTo);
    return (
      <ChatNode
        item={item}
        replyMessage={replyMessage}
        onPress={() => onPressChatNode(item.id)}
        onLongPress={() => toggleSelect(item.id)}
        selected={selectedMessages.includes(item.id)}
        onReply={() => setReplyMessage(item)}
        textRef={textRef}
      />
    );
  };

  const sendMessage = () => {
    if (!writtenMessage) {
      return;
    }
    let message = {
      message: writtenMessage,
      time: database.ServerValue.TIMESTAMP,
      status: 0,
      uid: auth().currentUser.uid,
      chatId,
    };
    if (replyMessage) {
      message.replyTo = replyMessage.id;
    }
    database().ref('messages').push(message);
    firestore()
      .collection('Chats')
      .doc(chatId)
      .update({
        lastMessage: {
          message: writtenMessage,
          time: database.ServerValue.TIMESTAMP,
          status: 0,
          uid: auth().currentUser.uid,
        },
      });
    setWrittenMessage('');
    setReplyMessage(null);
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
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
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
          <ChatInput
            keyboardIconPress={keyboardIconPress}
            showEmoji={showEmoji}
            onChangeText={onChangeText}
            textRef={textRef}
            writtenMessage={writtenMessage}
            onInputFocus={onInputFocus}
            sendMessage={sendMessage}
            replyMessage={replyMessage}
            closeReply={() => setReplyMessage(null)}
          />
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
