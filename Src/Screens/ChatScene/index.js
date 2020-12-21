import React, {useState, useRef, useEffect} from 'react';
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
import {AttachModal, Topbar} from '../../Components';
import styles from '../ChatScene/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useHeaderHeight} from '@react-navigation/stack';
import {ChatInput, ChatNode} from './Components';
import {colors} from '../../Assets';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ChatScene = ({route}) => {
  const headerHeight = useHeaderHeight();
  const {user, chatId} = route.params;
  const [messages, setMessages] = useState([]);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [replyMessage, setReplyMessage] = useState(null);
  const [writtenMessage, setWrittenMessage] = useState(null);
  const [attachPressed] = useState(false);
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
          formatedValues.push({
            ...value[item],
            id: item,
            displayName:
              value[item].uid == auth().currentUser.uid
                ? 'You'
                : user.displayName ?? user.phoneNumber,
          });
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

  const deleteSelected = () => {
    selectedMessages.forEach((message) => {
      database().ref('messages').child(message).remove();
    });
    setSelectedMessages([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={headerHeight}
        behavior={Platform.OS === 'ios' ? 'padding' : 'null'}>
        <StatusBar backgroundColor="#075e54" barStyle="light-content" />
        <Topbar
          title={user.displayName ?? user.phoneNumber}
          avatar={user.photoURL}
          moreMenus={[
            {title: 'test', onPress: () => alert('test')},
            {title: 'test2', onPress: () => alert('test2')},
          ]}
          showOverlayComponent={Boolean(selectedMessages.length)}
          OverlayComponent={
            <SelectedMessagesActions
              closeActions={() => setSelectedMessages([])}
              data={[
                {
                  icon: 'delete',
                  onPress: deleteSelected,
                  component: MaterialIcons,
                },
              ]}
            />
          }
          menus={[
            {icon: 'videocam', onPress: () => {}, component: Ionicons},
            {icon: 'phone', onPress: () => {}, component: MaterialIcons},
          ]}
        />
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

const SelectedMessagesActions = ({data, closeActions}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.themePrimary.light,
        flexDirection: 'row',
      }}>
      <Feather
        name="arrow-left"
        color="white"
        size={25}
        onPress={closeActions}
        style={styles.icons}
      />
      <View style={{flex: 1}} />
      {data.map((item) => (
        <item.component
          name={item.icon}
          color="white"
          size={25}
          onPress={item.onPress}
          style={styles.icons}
        />
      ))}
    </View>
  );
};
