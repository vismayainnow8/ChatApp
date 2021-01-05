import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import StoryCircle from './StoryCircle';

interface StatusListImageProps {
  data: Array<ImageData>;
}

interface ImageData {
  uri: string;
  time: number;
  type: string;
  seen: boolean;
}

export const StatusListImage = (props: StatusListImageProps) => {
  const {data} = props;
  const notSeenImageIndex = data.findIndex((item) => !item.seen);
  const imageIndex = notSeenImageIndex < 0 ? 0 : notSeenImageIndex;
  return (
    <View>
      <StoryCircle radius={28.5} innerRadius={26} data={data} dividerSize={8} />
      <Image
        source={{uri: data[imageIndex].uri}}
        style={styles.initStyle}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  initStyle: {
    position: 'absolute',
    top: 4.5,
    left: 4.5,
    borderRadius: 48,
    width: 48,
    height: 48,
  },
});
