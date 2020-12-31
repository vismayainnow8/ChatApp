import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import StoryCircle from './StoryCircle';

interface StatusListImageProps {
  photoURL: string;
  data: Array<ImageData>;
}

interface ImageData {
  uri: string;
  time: number;
  type: string;
  seen: boolean;
}

export const StatusListImage = (props: StatusListImageProps) => {
  const {photoURL, data} = props;
  return (
    <View>
      <StoryCircle radius={28.5} innerRadius={26} data={data} dividerSize={8} />
      <Image
        source={{uri: photoURL}}
        style={styles.initStyle}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  initStyle: {
    position: 'absolute',
    top: 4.5,
    left: 4.5,
    borderRadius: 24,
    width: 48,
    height: 48,
  },
});
