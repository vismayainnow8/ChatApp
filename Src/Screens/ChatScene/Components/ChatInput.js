import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EmojiBoard from 'react-native-emoji-board';
import database from '@react-native-firebase/database';
import RBSheet from 'react-native-raw-bottom-sheet';
import auth from '@react-native-firebase/auth';
import {Input} from './Input';

export const inputTypes = {
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

  const openImagePicker = () => {
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

  const openImageCamera = () => {
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

  const openVideoPicker = () => {
    pickerLstRef.current.close();
    ImageCropPicker.openPicker({
      mediaType: 'video',
      multiple: true,
    })
      .then((video) => setMedias(video))
      .catch((error) => console.log(error));
  };

  const openVideoCamera = () => {
    pickerLstRef.current.close();
    ImageCropPicker.openCamera({
      mediaType: 'video',
    })
      .then((video) => setMedias([{...video}]))
      .catch((error) => console.log(error));
  };

  const attachmentOptions = [
    {color: '#6F3CF6', icon: 'note', title: 'Document', onPress: () => {}},
    {
      color: '#F9227A',
      icon: 'camera-alt',
      title: 'Capture Image',
      onPress: openImageCamera,
    },
    {
      color: '#EF3FDA',
      icon: 'image',
      title: 'Select Image',
      onPress: openImagePicker,
    },
    {
      color: '#36CD1B',
      icon: 'videocam',
      title: 'Capture Video',
      onPress: openVideoCamera,
    },
    {
      color: '#FDC63D',
      icon: 'video-library',
      title: 'Select Video',
      onPress: openVideoPicker,
    },
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
        openCamera={openImageCamera}
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
        height={220}
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

export const styles = StyleSheet.create({
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
