import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import StoryCircle from './StoryCircle';

interface ImageData {
  uri: string;
  time: number;
  type: string;
  seen: boolean;
}
interface StatusListImageProps {
  data:  ImageData;
}



export const StatusListImage = (props: StatusListImageProps) => {
  const { data } = props;
  console.log('statusdata',data)
  return (
    <View style={{flex:1,margin:10}}>
      <Image
        source={{uri: data.uri}}
        style={styles.initStyle}
        resizeMode="cover"
      />
    </View>
  ); 
};

const styles = StyleSheet.create({
  initStyle: {
    // position: 'absolute',
    // top: 4.5,
    // left: 4.5,
    borderRadius: 48,
    width: 48,
    height: 48,
  },
});
