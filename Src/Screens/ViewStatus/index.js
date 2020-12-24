import React from "react";
import { View, Text,StatusBar } from "react-native";
import {StoryContainer, ProgressBar} from '../../Components/Story';

const ViewStatus = () => {
        const images = [
                'https://s3.ap-south-1.amazonaws.com/hsdreams1/pins/2019/01/big/7d1e5e0b31a650b9314023921b9e161b.jpeg',
                'https://boostupliving.com/wp-content/uploads/2019/06/best-motivational-quote-mobile-wallpapers-53.jpg',
                'https://i.pinimg.com/originals/51/bd/4c/51bd4c1e72d5d6ae5f2a4f31e31d2ef5.jpg',
                'https://pumpernickelpixie.com/wp-content/uploads/2016/01/15-phone-wallpaper.jpg',
                'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
              ];
  return (
    <View    >
       <StatusBar hidden={true} />
    <StoryContainer
   visible={true}
   enableProgress={true}
   images={images}
   duration={20}  
   containerStyle={{
       width: '100%',
           height: '100%',
   }}
/>
    </View>
  );
};

export default ViewStatus;