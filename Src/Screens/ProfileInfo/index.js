import React, {useLayoutEffect,useEffect} from 'react';
import {View, Text,Image,TextInput} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import Entypo from 'react-native-vector-icons/Entypo';
import {SmallButton} from '../../Components';

import styles from './styles';

const ProfileInfo = ({navigation, route}) => {
  const onChangeText = () => {
    
  }

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
                placeholder="Type your name here ...."
                style={styles.phoneNumberContainer}
                onChangeText={(text) => onChangeText(text)}
                placeholderStyle={{fontSize: 20}}
        />
        <Entypo
                // onPress={() => keyboardIconPress()}
                style={styles.emoji}
                name={'emoji-happy'}
                size={20}
                color="grey"
              />
        </View>
        <SmallButton
            title="NEXT"
            labelStyle={styles.labelStyle}
            style={styles.style}
            onPress={() => signInWithPhoneNumber()}
          />
      </View>
    </View>
  );
};

export default ProfileInfo;
