import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Keyboard,
  Text,
  Pressable,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ReplyMessage} from './ReplyMessage';
import storage from '@react-native-firebase/storage';
import {v4 as uuidv4} from 'uuid';
import {Circle} from 'react-native-progress';
import {inputTypes} from './ChatInput';
import {MediaThumbnail} from '../../../Components';

export const attachmentTypes = {
  video: 'video',
  image: 'image',
  file: 'file',
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
  openCamera,
}) => {
  const [loading, setLoading] = useState({status: false, fileNumber: ''});
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

  const onPressSend = () => {
    if (!writtenMessage && !medias?.length) {
      return;
    }
    let message = {
      message: writtenMessage ?? undefined,
    };
    setWrittenMessage('');
    if (medias.length) {
      setMedias([]);
      medias.forEach(async (media, index) => {
        setLoading({status: 0.01, fileNumber: index + '/' + medias.length});
        message.media = {};
        message.media.fileName = media.fileName;
        message.media.path = media.path;
        message.media.url = await uploadImageAsPromise(media);
        message.media.type = media.type?media.type.split('/')[0]:media.mime.split('/')[0];
        sendMessage(message);
      });
    } else {
      sendMessage(message);
    }
  };

  const uploadImageAsPromise = async (image) => {
    return new Promise((resolve, reject) => {
      const imageStorageRef = storage().ref(
        'images/attachments/' + uuidv4() + '.jpeg',
      );
      const task = imageStorageRef.putFile(image.path);

      task.on(
        'state_changed',
        (taskSnapshot) => {
          const fraction =
            taskSnapshot.bytesTransferred / taskSnapshot.totalBytes;
          setLoading((data) => ({
            ...data,
            status: fraction > 0 ? fraction : 0.01,
          }));
        },
        (err) => {
          console.log(err);
          reject(err);
        },
        async () => {
          setLoading({status: false, fileNumber: ''});
          const downloadURL = await imageStorageRef.getDownloadURL();
          resolve(downloadURL);
        },
      );
    });
  };

  const closeMedia = (index) => {
    setMedias((medias) => [
      ...medias.slice(0, index),
      ...medias.slice(index + 1),
    ]);
  };

  const renderMediaThumbnail = (media, index) => {
    return (
      <View style={[styles.mediaThumbnailContainer,{width:(media.type!='image' &&media.type!= 'video')?150:50}]}>
        <MediaThumbnail
          type={media.type?media.type.split('/')[0]:media.mime.split('/')[0]}
          style={styles.videoThumbnail}
          iconSize={25}
          url={media.path}
          fileName={media.fileName}
        />
        <Pressable
          onPress={() => closeMedia(index)}
          style={styles.closeMedia}
          hitSlop={10}>
          <Entypo name={'cross'} size={15} color="grey" />
        </Pressable>
      </View>
    );
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
          <View style={styles.mediaContainer}>
            {medias.map(renderMediaThumbnail)}
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
          <FontAwesome
            style={styles.emoji}
            onPress={showMenu}
            name="paperclip"
            size={22}
            color="grey"
          />
          <FontAwesome
            style={styles.emoji}
            onPress={openCamera}
            name="camera"
            size={22}
            color="grey"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.sendContainer}>
        {loading.status ? (
          <Circle progress={loading.status} size={48} color="white">
            <View style={styles.percentageContainer}>
              <Text style={styles.percentage}>
                {Math.ceil(loading.status * 100)}%
              </Text>
              <Text style={styles.percentage}>of {loading.fileNumber}</Text>
            </View>
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
  mediaContainer: {
    flexDirection: 'row',
    margin: 7,
    marginBottom: 0,
  },
  mediaThumbnailContainer: {
    height: 50,
    // width: 50,
    marginRight: 5,
  },
  imageThumbnail: {
    borderRadius: 3,
    flex: 1,
  },
  videoThumbnail: {
    flex: 1,
  },
  closeMedia: {
    backgroundColor: '#FFFFFFA0',
    borderRadius: 20,
    position: 'absolute',
    top: 2,
    right: 2,
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
  percentageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
  },
  percentage: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
