import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {MediaThumbnail} from '../../../Components';

export const ReplyMessage = ({replyMessage, closeReply}) => {
  return (
    <View style={styles.replyContainer}>
      <View style={styles.replyHeader}>
        <Text style={styles.replyHeaderText} numberOfLines={1}>
          {replyMessage.displayName}
        </Text>
      </View>

      {Boolean(replyMessage.message) && (
        <Text style={styles.replyMessage} numberOfLines={3}>
          {replyMessage.message}
        </Text>
      )}

      {Boolean(replyMessage.media) && (
        <MediaThumbnail
          iconSize={25}
          style={styles.mediaThumbnail}
          url={replyMessage.media.url}
          type={replyMessage.media.type}
          name={replyMessage.media.name}
        />
      )}

      {Boolean(replyMessage.media) && (
        <Text style={styles.mediaText}>
          <Entypo name={'image'} size={18} color="grey" /> Media
        </Text>
      )}
      {closeReply && (
        <Pressable onPress={closeReply} style={styles.closeReply} hitSlop={10}>
          <Entypo name={'cross'} size={18} color="#555555" />
        </Pressable>
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  replyContainer: {
    borderLeftWidth: 3,
    borderColor: '#AA88BB',
    borderRadius: 3,
    backgroundColor: '#f7f7f770',
    margin: 7,
    marginBottom: 0,
    padding: 7,
  },
  replyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  replyHeaderText: {
    marginRight: 30,
    fontWeight: 'bold',
    color: '#AA88BB',
  },
  closeReply: {
    backgroundColor: '#FFFFFFA0',
    position: 'absolute',
    borderRadius: 9,
    top: 2,
    right: 2,
  },
  replyMessage: {
    fontSize: 12,
    color: 'grey',
  },
  mediaText: {
    fontSize: 12,
    color: 'grey',
  },
  mediaThumbnail: {
    position: 'absolute',
    right: 0,
    height: 47,
    width: 47,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
});
