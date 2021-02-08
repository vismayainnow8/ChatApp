import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { Screen, Topbar } from '../../Components';
import styles from '../ChatScene/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { ChatInput, ChatNode } from './Components';
import { colors } from '../../Assets';

const ChatScene = ({ route, navigation }) => {
  const { user, chatId, groupName, groupIcon, type, chat } = route.params;
  const [messages, setMessages] = useState([]);
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [replyMessage, setReplyMessage] = useState(null);
  const textRef = useRef(null);

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
            // type: type,
            // groupUserName: user?.displayName,
            displayName: groupName ? groupName :
              (value[item].uid == auth().currentUser.uid
                ? 'You'
                : user?.displayName ?? user?.phoneNumber)

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

  const sendMessage = (message) => {
    message.chatId = chatId;
    if (type == 'indirect') {
      message.groupUserName = auth().currentUser.displayName
      message.groupUserPhone = auth().currentUser.phoneNumber
    }
    message = { ...message, time: firestore.Timestamp.now().toMillis() };
    console.log('lastMessage', message)
    database().ref('messages').push(message);
    // message = { ...message, time: firestore.Timestamp.now().toMillis() };
    firestore().collection('Chats').doc(chatId).update({
      lastMessage: message,
    }).then(() => {
      // const payload = {
      //   notification: {
      //     title: "Welcome",
      //     body: "thank for installed our app",
      //   },F
      // };
      // var admin = require("firebase-admin");
      // admin
      //   .messaging()
      //   .sendToDevice(data.notification_token, payload)
      //   .then(function (response) {
      //     console.log("Notification sent successfully:", response);
      //   })
      //   .catch(function (error) {
      //     console.log("Notification sent failed:", error);
      //   })

    }
    )
    setReplyMessage(null);
  };

  const deleteSelected = () => {
    selectedMessages.forEach((message) => {
      database().ref('messages').child(message).remove();
    });
    setSelectedMessages([]);
  };

  const replySelected = () => {
    const [id] = selectedMessages;
    const replyMessage = messages.find((message) => message.id == id);
    setReplyMessage(replyMessage);
  };

  const selectedMessagesActionsData = () => {
    let data = [];
    if (selectedMessages.length == 1) {
      data.push({
        icon: 'reply',
        onPress: replySelected,
        component: MaterialIcons,
      });
    }
    data.push({
      icon: 'delete',
      onPress: deleteSelected,
      component: MaterialIcons,
    });
    return data;
  };

  const topbarMoreMenus = [
    { title: 'test', onPress: () => alert('test') },
    { title: 'test2', onPress: () => alert('test2') },
  ];
  const topbarMenus = [
    { icon: 'videocam', onPress: () => { }, component: Ionicons },
    { icon: 'phone', onPress: () => { }, component: MaterialIcons },
  ];

  const chatView = useMemo(
    () => (
      <FlatList
        style={{ flexGrow: 0 }}
        keyboardShouldPersistTaps="handled"
        inverted={true}
        data={messages}
        renderItem={({ item }) => (
          <ChatNode
            item={item}
            replyMessage={messages.find(
              (message) => message.id == item.replyTo,
            )}
            onPress={() => onPressChatNode(item.id)}
            onLongPress={() => toggleSelect(item.id)}
            selected={selectedMessages.includes(item.id)}
            onReply={() => setReplyMessage(item)}
            textRef={textRef}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    ),
    [messages, selectedMessages],
  );


  const onPressTopbar = () => navigation.navigate('ViewContact', { user, groupName, groupIcon, type });

  return (
    <Screen>
      <Topbar
        type={type}
        title={groupName ? groupName : (user?.displayName ?? user?.phoneNumber)}
        // avatar={groupIcon?groupIcon:(user?.photoURL?(user?.photoURL))}
        avatar={groupIcon ?? user?.photoURL}
        // moreMenus={topbarMoreMenus}
        showOverlayComponent={Boolean(selectedMessages.length)}
        OverlayComponent={
          <SelectedMessagesActions
            closeActions={() => setSelectedMessages([])}
            data={selectedMessagesActionsData()}
          />
        }
        menus={topbarMenus}
        onPress={onPressTopbar}
      />
      <ImageBackground
        source={require('../../Assets/chatBackground.png')}
        style={styles.image}>
        <View style={{ flex: 1 }}>{chatView}</View>
        <ChatInput
          textRef={textRef}
          sendMessage={sendMessage}
          replyMessage={replyMessage}
          closeReply={() => setReplyMessage(null)}
        />
      </ImageBackground>
    </Screen>
  );
};

export default ChatScene;

const SelectedMessagesActions = ({ data, closeActions }) => {
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
      <View style={{ flex: 1 }} />
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
