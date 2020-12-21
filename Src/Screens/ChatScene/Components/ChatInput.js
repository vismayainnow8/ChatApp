import React from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ReplyMessage} from './ReplyMessage';

export const ChatInput = ({
  keyboardIconPress,
  showEmoji,
  onChangeText,
  textRef,
  writtenMessage,
  onInputFocus,
  sendMessage,
  replyMessage,
  closeReply,
}) => {
  return (
    <View style={styles.bottomContainer}>
      <View
        style={[styles.inputContainer, replyMessage && styles.hasReplyMessage]}>
        {replyMessage && (
          <ReplyMessage replyMessage={replyMessage} closeReply={closeReply} />
        )}
        <View style={styles.textInputContainer}>
          <Entypo
            onPress={() => keyboardIconPress()}
            style={styles.emoji}
            name={showEmoji ? 'keyboard' : 'emoji-happy'}
            size={22}
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
          <TouchableOpacity style={styles.emoji}>
            <FontAwesome name="paperclip" size={22} color="grey" />
          </TouchableOpacity>
          <View style={styles.emoji}>
            <FontAwesome name="camera" size={22} color="grey" />
          </View>
        </View>
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
  );
};

export const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    padding: 5,
    width: '100%',
  },
  inputContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  hasReplyMessage: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  textInputContainer: {
    maxHeight: 150,
    flexDirection: 'row',
  },
  emoji: {
    alignSelf: 'flex-end',
    padding: 13,
  },
  textinput: {
    flex: 1,
    minHeight: 28,
    marginRight: 10,
    marginVertical: 10,
    paddingVertical: 0,
  },
  sendContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#128c7e',
    paddingVertical: 12,
    borderRadius: 25,
    paddingLeft: 15,
    paddingRight: 9,
    marginLeft: 5,
    height: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
