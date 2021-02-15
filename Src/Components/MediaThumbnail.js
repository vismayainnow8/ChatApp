import React, { useEffect, useState } from 'react';
import { StyleSheet, Pressable, Text, Image } from 'react-native';
import { createThumbnail } from 'react-native-create-thumbnail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { attachmentTypes } from '../Screens/ChatScene/Components/Input';
import { colors, consts } from '../Assets';

export const MediaThumbnail = ({
  url,
  iconSize,
  style,
  type,
  name,
  onPress = () => { },
}) => {
  switch (type) {
    case attachmentTypes.video:
      return (
        <VideoThumbnail
          url={url}
          iconSize={iconSize}
          style={style}
          onPress={onPress}
        />
      );
    case attachmentTypes.image:
      return <ImageThumbnail url={url} style={style} onPress={onPress} />;
    default:
      // return <></>;
      return <FileThumbnail url={url} name={name} style={style} onPress={onPress} />;

      break;
  }
};

const VideoThumbnail = ({ url, iconSize, style, onPress = () => { } }) => {
  console.log('thumbnailImage', thumbnailImage)
  console.log('url', thumbnailImage)
  const [thumbnailImage, setThumbnailImage] = useState({});

  useEffect(() => {
    createThumbnail({
      url: url,
      timeStamp: 10000,
    })
      .then((response) => setThumbnailImage(response))
      .catch(err => console.log({ err }));
  }, [url]);



  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Image
        style={[styles.thumbnail, { aspectRatio: 1 }]}
        source={{ uri: thumbnailImage?.path }}
        resizeMode="cover"
      />
      <Ionicons
        style={styles.thumbnailIcon}
        name="play-circle-outline"
        color="#FFFFFF"
        size={iconSize}
      />
    </Pressable>
  );
};

const ImageThumbnail = ({ url, style, onPress = () => { } }) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Image style={[styles.thumbnail, { aspectRatio: 1 }]} source={{ uri: url }} resizeMode="cover" />
    </Pressable>
  );
};

const FileThumbnail = ({ url, name, style, onPress = () => { } }) => {
  return (
    <Pressable style={[styles.fileContainer, { flexDirection: "row" }, style]} onPress={onPress}>
      <Text style={{ fontSize: 11 }}>{name} </Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    // backgroundColor: 'black',
    justifyContent: 'center',

  },
  fileContainer: {
    borderRadius: 3,
    padding: 10,
    backgroundColor: '#dcf8c6',
    alignItems: "center",
    // aspectRatio:4.9,
  },
  thumbnail: {
    flex: 1,
    borderRadius: 3,
    borderWidth: 3,
    borderColor: 'red',


  },
  thumbnailIcon: {
    position: 'absolute',
    alignSelf: 'center',
  },





});
