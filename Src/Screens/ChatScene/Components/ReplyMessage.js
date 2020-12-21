import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export const ReplyMessage = ({replyMessage, closeReply}) => {
  return (
    <View style={styles.replyContainer}>
      <View style={styles.replyHeader}>
        <Text style={styles.replyHeaderText} numberOfLines={1}>
          {replyMessage.uid}
        </Text>
        {closeReply && (
          <Entypo
            onPress={closeReply}
            style={styles.closeReply}
            name={'cross'}
            size={18}
            color="grey"
          />
        )}
      </View>
      <Text style={styles.replyMessage} numberOfLines={3}>
        {replyMessage.message}
      </Text>
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
    position: 'absolute',
    top: -15,
    right: -15,
    padding: 12,
  },
  replyMessage: {
    fontSize: 12,
    color: 'grey',
  },
});
