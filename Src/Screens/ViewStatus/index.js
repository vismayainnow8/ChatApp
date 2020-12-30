import React, {useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import { View, Text,StatusBar,Dimensions,ActivityIndicator } from "react-native";
import { StoryContainer, ProgressBar } from '../../Components/Story';

const ViewStatus = (props) => {
  var formattedImages = [];
  // const [loadData, setData] = useState(false);
  useEffect(() => {
    props.imageUriArray.forEach(item => {
      formattedImages.push(item.uri);
    });
    console.log('formattedData', formattedImages)
    // const timer = setTimeout(() => {
      // setData(true);
    // }, 5000);

    // return () => clearTimeout(timer);
  });
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
    {/* { loadData? */}
    <StoryContainer
   visible={true}
   enableProgress={true}
   images={formattedImages}
   duration={20}  
        containerStyle={{ width: '100%', height: '100%', }}
        userProfile={{
          // userImage: 'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
          userName: 'Vis',
          userMessage: 'Work hard & success will follow !!',
          // imageArrow: 'https://i.pinimg.com/originals/5a/f0/e5/5af0e538f7437fd13a73f7c96601ccb6.jpg',
          // onImageClick: () => {
          //   Alert.alert('User profile image tapped');
          // },
          }}
          userProfile={{
            // userImage: PROFILE,
            userName: 'Vinay N',
            userMessage: 'Work hard & success will follow !!',
            // imageArrow: BACK,
            // onImageClick: () => {
            //   Alert.alert('User profile image tapped');
            // },
        }}
        replyView={{
          isShowReply: true,
          onReplyTextChange: (textReply, progressIndex) => {
            console.log(
              `Text : ${textReply} , position : ${progressIndex}`,
            );
          },
          onReplyButtonClick: (buttonType, progressIndex) => {
            switch (buttonType) {
              case 'send':
                console.log(
                  `Send button tapped for position : ${progressIndex}`,
                );
                break;

              case 'smiley':
                console.log(
                  `Smiley button tapped for position : ${progressIndex}`,
                );
                break;
            }
          },
        }}
      /> 
      {/* : (
        <ActivityIndicator size="large"></ActivityIndicator>
      )} */}
    </View>
  );
};

const mapStateToProps = (state, props) => {
  return {
    imageUri: state.imageUri.imageUri,
    imageUriArray: state.imageUri.imageUriArray,
    ...props
  };
};

export default connect(mapStateToProps, null)(ViewStatus);
