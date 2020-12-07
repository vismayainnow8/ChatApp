import React, {useLayoutEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const CallingScreen = ({navigation}) => {
  const [volume, setVolume] = useState(false);
  const [video, setVideo] = useState(false);
  const [microphone, setMicrophone] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'End to end encrypted',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#128c7e',
        elevation: 0,
      },
      headerTitleStyle: {
        fontSize: 13,
      },
      headerTintColor: 'white',
      headerLeft: () => {
        return (
          <AntDesign
            onPress={() => downArrowFunction()}
            name="down"
            size={25}
            color="white"
            style={{paddingLeft: 10}}
          />
        );
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const downArrowFunction = () => {
    navigation.navigate('ChatScene');
  };
  const microphonePressed = () => {
    if (microphone) {
      setMicrophone(false);
    } else {
      setMicrophone(true);
    }
  };
  const volumePressed = () => {
    if (volume) {
      setVolume(false);
    } else {
      setVolume(true);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.callerContainer}>
        <Text style={styles.callerText}>Adithi Sharma</Text>
        <Text style={styles.statusText}>Calling</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../Assets/welcomeImage.jpg')}
          style={styles.image}
        />
        <View style={styles.contactsbuttonContainer}>
          <MaterialIcons
            // onPress={() => alert('search')}
            onPress={() => navigation.navigate('ChatScene')}
            name="call-end"
            size={24}
            color="white"
            // style={{ paddingRight: 10 }}
          />
        </View>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.eachIconContainer}>
          <TouchableOpacity
            style={[
              styles.volumeIconContainer,
              {backgroundColor: volume ? '#149a8a' : '#128c7e'},
            ]}
            onPress={() => volumePressed()}>
            <FontAwesome
              name="volume-up"
              size={25}
              color={volume ? 'white' : '#16ac9b'}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.eachIconContainer}>
          <TouchableOpacity style={styles.videocamIconContainer}>
            <MaterialIcons
              name="videocam"
              size={25}
              color="#16ac9b"
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.eachIconContainer}>
          <TouchableOpacity
            style={[
              styles.microphoneIconContainer,
              {
                backgroundColor: microphone ? '#149a8a' : '#128c7e',
              },
            ]}
            onPress={() => microphonePressed()}>
            <FontAwesome
              name="microphone-slash"
              size={25}
              color={microphone ? 'white' : '#16ac9b'}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CallingScreen;
