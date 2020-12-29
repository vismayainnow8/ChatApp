import React, {useEffect, useState} from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';
import {createThumbnail} from 'react-native-create-thumbnail';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {attachmentTypes} from '../Screens/ChatScene/Components/Input';

export const MediaThumbnail = ({
  url,
  iconSize,
  style,
  type,
  onPress = () => {},
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
      return <></>;
      break;
  }
};

const VideoThumbnail = ({url, iconSize, style, onPress = () => {}}) => {
  const [thumbnailImage, setThumbnailImage] = useState({});
  // useEffect(() => {
  // createThumbnail({
  //   url,
  // });
  // .then((response) => setThumbnailImage(response))
  // .catch((err) => console.log({err}));
  // }, [url]);

  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Image
        style={styles.thumbnail}
        source={{uri: thumbnailImage?.path}}
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

const ImageThumbnail = ({url, style, onPress = () => {}}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Image style={styles.thumbnail} source={{uri: url}} resizeMode="cover" />
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  thumbnail: {
    flex: 1,
    borderRadius: 3,
  },
  thumbnailIcon: {
    position: 'absolute',
    alignSelf: 'center',
  },
});
