import React, { useRef, useState, memo, useEffect } from 'react';
import { View, Text, Animated, Pressable, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import { ReplyMessage } from './ReplyMessage';
import { consts } from '../../../Assets';
import { Swipable, MediaThumbnail } from '../../../Components';
import { useNavigation } from '@react-navigation/native';
import FileViewer from 'react-native-file-viewer';
export default ({
  item,
  onPress,
  onLongPress,
  selected,
  onReply,
  textRef,
  replyMessage,
}) => {
  const swipableRef = useRef();
  const navigation = useNavigation();
  const isMine = item.uid == auth().currentUser.uid;
  const derivedContainerStyle = isMine ? styles.myNode : styles.othersNode;

  const LeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 48, 500],
      outputRange: [-48, 0, 0],
    });
    return (
      <Animated.View
        style={[styles.actionView, { transform: [{ translateX: trans }] }]}>
        <View style={styles.reply}>
          <Entypo name={'reply'} size={22} color="white" />
        </View>
      </Animated.View>
    );
  };
  const leftAction = async () => {
    onReply();
    textRef.current.focus();
  };
  const MediaThumbnailPress = () => {
    // if (item.media.type != 'image' && item.media.type != 'video') {
    console.log('mediaaa', item.media)
    FileViewer.open(item.media.url, { showOpenWithDialog: true })
      .catch(error => {
        console.log('docerror', error)
      })
    // }
    // else {
    //   navigation.navigate('ViewMedia', item)
    // }
  }
  return (
    <Swipable
      ref={swipableRef}
      renderLeftActions={LeftActions}
      overshootLeft={false}
      overshootFriction={3}
      useNativeAnimations={true}
      onLeftAction={leftAction}>
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={{ backgroundColor: selected ? '#00BBFF30' : 'transparent' }}>
        <View style={[styles.chatNode, derivedContainerStyle]}>
          {item?.media?.type !== 'image' && item?.media?.type !== 'video' && <Text style={styles.chatNodeType}> {item.media?.type?.split('/')?.pop()?.toUpperCase()} </Text>}
          {auth().currentUser.uid !== item?.uid
            // && item.lastMessage?.uid !== item?.uid
            && item?.type == 'indirect' && <Text style={styles.groupUserNameStyle}>{item.groupSenderName}</Text>}
          {replyMessage && <ReplyMessage replyMessage={replyMessage} />}
          {item.media && (
            <MediaThumbnail
              style={item.media.type !== 'image' && item.media.type !== 'video' ? null : styles.image}
              name={item.media.name}
              path={item.media.path}
              iconSize={100}
              // onPress={() => MediaThumbnailPress()}
              onPress={() => navigation.navigate('ViewMedia', item)}
              type={item.media.mime ? item.media.mime.split('/')[0] : item.media.type.split('/')[0]}
              url={item.media.url}
            />
          )}
          <View style={styles.messageContainer}>
            <Text style={styles.message}>{item.message}</Text>
            <View style={styles.timePadder} />
            <Text style={styles.chatNodeTime}>
              {moment(item.time).format('D MMM h:mm a')}
            </Text>
          </View>
        </View>
      </Pressable>
    </Swipable>
  );
};

const styles = StyleSheet.create({
  actionView: {
    width: 48,
    justifyContent: 'center',
  },
  chatNode: {
    maxWidth: '80%',
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  myNode: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  othersNode: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
  },
  title: {
    margin: 7,
    marginBottom: 0,
    fontWeight: 'bold',
    color: 'red',
  },
  groupUserNameStyle: {
    margin: 7,
    marginBottom: 0,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    backgroundColor: 'white',
    // justifyContent: "center",
    width: consts.ScreenWidth * 0.8 - 14,
    aspectRatio: 1,
    margin: 7,
    marginBottom: 0,
    borderRadius: 3,
    // aspectRatio: 1
  },
  videoThumbnail: {
    height: 10,
  },
  messageContainer: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  message: {},
  timePadder: {
    height: 14,
    width: 100,
  },
  chatNodeTime: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 9,
    color: '#777',
    fontSize: 10,
  },
  chatNodeType: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 9,
    color: '#777',
    fontSize: 10,
    fontWeight: 'bold'
  },
  reply: {
    width: 32,
    height: 32,
    margin: 8,
    borderRadius: 16,
    backgroundColor: '#00000020',
    padding: 5,
  },
});
