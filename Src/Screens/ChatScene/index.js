import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { View, FlatList, Alert, ImageBackground, TouchableOpacity } from 'react-native';
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
  const [lastObject, setLastObject] = useState(null);
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
        if (value) {
          var objectArray = Object.values(value)
          setLastObject(objectArray?.slice(-1)[0])
          console.log('lastObject', lastObject)
        }
        Object.keys(value ?? {}).forEach((item) => {
          formatedValues.push({
            ...value[item],
            id: item,
            lastMessage: lastObject,
            type: value[item].type,
            groupSenderName: value[item].senderName,
            groupSenderPhone: value[item].senderPhone,
            displayName: groupName ? groupName :
              (value[item].uid == auth().currentUser.uid
                ? auth().currentUser.displayName
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
  // useEffect(() => {
  //   if (type == 'indirect') {
  //     let usersIds = user.map(item => item.uid);
  //     const foundInGroup = usersIds.some(el => el === auth().currentUser._user.uid);
  //   }
  // });

  const sendMessage = (message) => {
    message.lastMessage = lastObject
    message.chatId = chatId;
    message.type = type;
    message.time = firestore.Timestamp.now().toMillis();
    if (type == 'indirect') {
      message.senderName = auth().currentUser.displayName,
        message.senderPhone = auth().currentUser.phoneNumber
      let usersIds = user.map(item => item.uid);
      const foundInGroup = usersIds.some(el => el === auth().currentUser._user.uid);
      if (foundInGroup) {
        firestore().collection('Group').doc(chatId)
          .update({
            lastMessage: message,
          }).then(() => {

          })
      }
      else {
        Alert.alert('', 'You cannot send messages to this group because you are no longer a participant  ', [
          { text: 'OK', onPress: () => console.log('ok') },
        ]);
      }
    }
    else {
      firestore().collection('Chats').doc(chatId).update({
        lastMessage: message,
      }).then(() => {
      })
    }
    database().ref('messages').push(message);
    // message = { ...message, time: firestore.Timestamp.now().toMillis() };

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


    setReplyMessage(null);
  };

  const deleteSelected = () => {
    selectedMessages.forEach((item) => {
      database().ref('messages').child(item).remove();
    });
    if (type == 'indirect') {
      firestore().collection('Group').doc(chatId)
        .update({
          lastMessage: {
            time: firestore.Timestamp.now().toMillis(),
            message: 'You deleted this message',
          }
        })
    } else {
      firestore().collection('Chats').doc(chatId)
        .update({
          lastMessage: {
            time: firestore.Timestamp.now().toMillis(),
            message: 'You deleted this message',
          }
        })
    }
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


  const onPressTopbar = () => navigation.navigate('ViewContact', { user, chatId, groupName, groupIcon, type });

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
          name={groupName ? groupName : (user?.displayName ?? user?.phoneNumber)}
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
