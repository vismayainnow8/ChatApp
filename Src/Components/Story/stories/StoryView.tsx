import React from 'react';
import {StoryViewProps} from '../utils/interfaceHelper';
import {View, StyleSheet, Dimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
const {height, width} = Dimensions.get('window');
function StoryView(props: StoryViewProps) {
  const {images, progressIndex} = props;

  return (
    <View style={styles.divStory}>
      <FastImage
        style={styles.imgStyle}
        source={{
          uri: images[progressIndex].uri,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
}

export default StoryView;

const styles = StyleSheet.create({
  divStory: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: width,
    height: height * 0.9,
  },
});
