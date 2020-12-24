import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Keyboard,
  Text,
  Pressable,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageCropPicker from 'react-native-image-crop-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EmojiBoard from 'react-native-emoji-board';
import {ReplyMessage} from './ReplyMessage';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import RBSheet from 'react-native-raw-bottom-sheet';
import auth from '@react-native-firebase/auth';
import {v4 as uuidv4} from 'uuid';
import {Circle, Bar, CircleSnail} from 'react-native-progress';

const inputTypes = {
  none: 'none',
  keyboard: 'keyboard',
  emoji: 'emoji',
  attachment: 'attachment',
};

export const ChatInput = ({textRef, sendMessage, replyMessage, closeReply}) => {
  const [inputType, setInputType] = useState(inputTypes.none);
  const [writtenMessage, setWrittenMessage] = useState(null);
  const [medias, setMedias] = useState([]);
  const pickerLstRef = useRef(null);

  const showMenu = () => {
    pickerLstRef.current.open();
  };

  const onClick = (emoji) => {
    setWrittenMessage((writtenMessage ?? '') + emoji.code);
  };

  const onRemove = () => {
    setWrittenMessage(writtenMessage.slice(0, -1));
  };

  const onPressSend = (message) => {
    message = {
      ...message,
      time: database.ServerValue.TIMESTAMP,
      status: 0,
      uid: auth().currentUser.uid,
    };
    if (replyMessage) {
      message.replyTo = replyMessage.id;
    }
    sendMessage(message);
  };

  const openPicker = () => {
    pickerLstRef.current.close();
    ImageCropPicker.openPicker({
      compressImageMaxWidth: 500,
      compressImageMaxHeight: 500,
      mediaType: 'image',
      cropping: true,
      multiple: true,
    })
      .then((image) => setMedias(image))
      .catch((error) => console.log(error));
  };

  const openCamera = () => {
    pickerLstRef.current.close();
    ImageCropPicker.openCamera({
      compressImageMaxWidth: 500,
      compressImageMaxHeight: 500,
      mediaType: 'image',
      cropping: true,
    })
      .then((image) => setMedias([{...image}]))
      .catch((error) => console.log(error));
  };

  const attachmentOptions = [
    {color: '#6F3CF6', icon: 'note', title: 'Document', onPress: () => {}},
    {
      color: '#F9227A',
      icon: 'camera-alt',
      title: 'Camera',
      onPress: openCamera,
    },
    {color: '#EF3FDA', icon: 'image', title: 'Gallery', onPress: openPicker},
  ];
  return (
    <>
      <Input
        textRef={textRef}
        sendMessage={onPressSend}
        replyMessage={replyMessage}
        closeReply={closeReply}
        inputType={inputType}
        setInputType={setInputType}
        writtenMessage={writtenMessage}
        setWrittenMessage={setWrittenMessage}
        medias={medias}
        setMedias={setMedias}
        showMenu={showMenu}
      />
      <EmojiBoard
        showBoard={inputType == inputTypes.emoji}
        tabBarPosition="top"
        onClick={onClick}
        categoryIconSize={22}
        containerStyle={{
          height: inputType == inputTypes.emoji ? 300 : 0,
          backgroundColor: 'white',
          position: 'relative',
        }}
        onRemove={onRemove}
      />
      <RBSheet
        ref={pickerLstRef}
        height={130}
        customStyles={{
          container: styles.modalView,
        }}>
        {attachmentOptions.map((option) => (
          <Pressable
            key={option.icon + option.color}
            onPress={option.onPress}
            style={styles.attachmentItem}>
            <View style={[styles.circle, {backgroundColor: option.color}]}>
              <IconMaterialIcons name={option.icon} color="white" size={23} />
            </View>
            <Text style={styles.circleText}>{option.title}</Text>
          </Pressable>
        ))}
      </RBSheet>
    </>
  );
};

export const Input = ({
  textRef,
  sendMessage,
  replyMessage,
  closeReply,
  inputType,
  setInputType,
  writtenMessage,
  setWrittenMessage,
  showMenu,
  medias,
  setMedias,
}) => {
  const [loading, setLoading] = useState(false);
  const keyboardIconPress = () => {
    if (Platform.OS == 'android') {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    } else {
      Keyboard.scheduleLayoutAnimation(LayoutAnimation.Presets.easeInEaseOut);
    }
    if (inputType !== inputTypes.emoji) {
      Keyboard.dismiss();
      setInputType(inputTypes.emoji);
    } else {
      textRef.current.focus();
      setInputType(inputTypes.keyboard);
    }
  };

  const onInputFocus = () => {
    setInputType(inputTypes.keyboard);
    if (Platform.OS == 'android') {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    } else {
      Keyboard.scheduleLayoutAnimation(LayoutAnimation.Presets.easeInEaseOut);
    }
  };

  const onPressSend = async () => {
    if (!writtenMessage && !medias?.length) {
      return;
    }
    let message = {
      message: writtenMessage ?? undefined,
    };
    if (medias[0]?.path) {
      const imageStorageRef = storage().ref(
        'images/attachments/' + uuidv4() + '.jpeg',
      );
      const task = imageStorageRef.putFile(medias[0].path);
      setLoading(0.01);
      setWrittenMessage('');
      setMedias([]);
      task.on('state_changed', (taskSnapshot) => {
        const fraction =
          taskSnapshot.bytesTransferred / taskSnapshot.totalBytes;
        setLoading(fraction > 0 ? fraction : 0.01);
      });

      task.then(async () => {
        const url = await imageStorageRef.getDownloadURL();
        message.media = url;
        sendMessage(message);
        setLoading(false);
      });
    } else {
      sendMessage(message);
    }
  };

  return (
    <View style={styles.bottomContainer}>
      <View
        style={[
          styles.inputContainer,
          (replyMessage || medias?.length) && styles.hasReplyMessage,
        ]}>
        {replyMessage && (
          <ReplyMessage replyMessage={replyMessage} closeReply={closeReply} />
        )}
        {!!medias?.length && (
          <View style={{flexDirection: 'row', margin: 7, marginBottom: 0}}>
            {medias.map((media) => (
              <Image
                style={{height: 50, width: 50, marginRight: 5}}
                source={{uri: media.path}}
              />
            ))}
          </View>
        )}
        <View style={styles.textInputContainer}>
          <Entypo
            onPress={() => keyboardIconPress()}
            style={styles.emoji}
            name={inputType !== inputTypes.emoji ? 'emoji-happy' : 'keyboard'}
            size={22}
            color="grey"
          />
          <TextInput
            placeholder="Type a message ...."
            style={styles.textinput}
            onChangeText={setWrittenMessage}
            placeholderStyle={{fontSize: 20}}
            ref={textRef}
            value={writtenMessage}
            onFocus={onInputFocus}
            multiline
          />
          <TouchableOpacity style={styles.emoji} onPress={showMenu}>
            <FontAwesome name="paperclip" size={22} color="grey" />
          </TouchableOpacity>
          <View style={styles.emoji}>
            <FontAwesome name="camera" size={22} color="grey" />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.sendContainer}>
        {loading ? (
          <Circle progress={loading} size={48} color="white">
            <Text style={styles.percentage}>{Math.ceil(loading * 100)}%</Text>
          </Circle>
        ) : (
          <Ionicons
            name="send"
            size={24}
            color="white"
            onPress={onPressSend}
            style={styles.sendIcon}
          />
        )}
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
    borderRadius: 25,
    marginLeft: 5,
    height: 48,
    width: 48,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  sendIcon: {
    marginVertical: 12,
    marginLeft: 15,
    marginRight: 9,
    height: 24,
    width: 24,
  },
  percentage: {
    position: 'absolute',
    fontSize: 14,
    paddingVertical: 10,
    marginVertical: 7,
    textAlign: 'center',
    width: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  modalView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20,
  },
  attachmentItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  circleText: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 14,
    marginTop: 6,
  },
});
