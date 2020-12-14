import React, {useLayoutEffect,useEffect,useState,useRef} from 'react';
import {View, Text,Image,TextInput,Platform, UIManager,Keyboard,
  LayoutAnimation,} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import Entypo from 'react-native-vector-icons/Entypo';
import {SmallButton} from '../../Components';
import EmojiBoard from 'react-native-emoji-board';

import styles from './styles';

const ProfileInfo = ({ navigation, route }) => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [writtenMessage, setWrittenMessage] = useState(null);
  const textRef = useRef(null);
  
  const onChangeText = (text) => {
    setWrittenMessage(text);
    
  }
  const backspace = () => {};

  const onClick = (emoji) => {
    setWrittenMessage(writtenMessage?writtenMessage + emoji.code:emoji.code);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Profile Info',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 18,
      },
      headerTintColor: '#128c7e',
    });
  });
const keyboardIconPress = () => {
    if (Platform.OS == 'android') {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    } else {
      Keyboard.scheduleLayoutAnimation(LayoutAnimation.Presets.easeInEaseOut);
    }
    if (!showEmoji) {
      Keyboard.dismiss();
      setShowEmoji(true);
    } else {
      textRef.current.focus();
      setShowEmoji(false);
    }
  };
  return (
    <View style={styles.mainContainer}>
       <Text style={styles.line}>
       Please provide your name and an optional profile photo
      </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View  style={styles.textinputContainer}>
          <TextInput
            ref={textRef}
            value={writtenMessage}
                placeholder="Type your name here ...."
                style={styles.phoneNumberContainer}
                onChangeText={(text) => onChangeText(text)}
                placeholderStyle={{fontSize: 20}}
        />
        <Entypo
                onPress={() => keyboardIconPress()}
                style={styles.emoji}
                name={showEmoji ? 'keyboard' : 'emoji-happy'}
                size={28}
                color="grey"
              />
        </View>
        
        <SmallButton
            title="NEXT"
            labelStyle={styles.labelStyle}
            style={styles.style}
            onPress={() => signInWithPhoneNumber()}
        />
        <EmojiBoard
          showBoard={showEmoji}
          tabBarPosition="top"
          onClick={onClick}
          categoryIconSize={22}
          containerStyle={{
            height: showEmoji ? 300 : 0,
            backgroundColor: 'white',
            position: 'relative',
          }}
          onRemove={backspace}
        />
      </View>
    </View>
  );
};

export default ProfileInfo;
