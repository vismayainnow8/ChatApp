import React from 'react';
import {StoryViewProps} from '../utils/interfaceHelper';
import {View, StyleSheet, Dimensions, Pressable} from 'react-native';
import FastImage from 'react-native-fast-image';
const {height, width} = Dimensions.get('window');

function StoryView(props: StoryViewProps) {
  const {
    images,
    progressIndex,
    goToPrevious,
    goToNext,
    onProgressStateChange,
    onViewed,
  } = props;

  const onLoadEnd = () =>
    !images[progressIndex].seen && onViewed(images[progressIndex].id);
  return (
    <View style={styles.divStory}>
      <View>
        <FastImage
          style={styles.imgStyle}
          source={{
            uri: images[progressIndex].uri,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
          onLoadEnd={onLoadEnd}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            flexDirection: 'row',
          }}>
          <Pressable
            delayLongPress={400}
            onLongPress={() => {}}
            style={{flex: 1}}
            onPress={() => goToPrevious()}
            onPressIn={() => onProgressStateChange(true)}
            onPressOut={() => onProgressStateChange(false)}
          />
          <Pressable
            delayLongPress={400}
            onLongPress={() => {}}
            style={{flex: 3}}
            onPress={() => goToNext()}
            onPressIn={() => onProgressStateChange(true)}
            onPressOut={() => onProgressStateChange(false)}
          />
        </View>
      </View>
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
