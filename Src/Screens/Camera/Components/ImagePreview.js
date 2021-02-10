import React, {useState, useRef, useLayoutEffect, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image,
  View,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {setImageUri, setImageUriArray} from '../../../StateManagement/Actions';

export const ImagePreview = ({
  navigation,
  route,
  setImageUri,
  setImageUriArray,
}) => {
  const [caption, setCaption] = useState(null);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [status, setStatus] = useState(null);

  const {cameraImageUri, time} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    // console.log('timessssssssss,time',time)
    // return database()
    //   .ref()
    //   .child('status')
    //   // .orderByChild('userId')
    //   // .equalTo(user.uid)
    //   .on('value', (snapshot) => {
    //     if (!snapshot) {
    //       return;
    //     }
    //     const value = snapshot.val();
    //     let formatedValues = [];
    //     Object.keys(value ?? {}).forEach((item) => {
    //       formatedValues.push({...value[item], id: item});
    //     });
    //     formatedValues.sort((a, b) => b.time - a.time);
    //     setStatus(formatedValues);
    //   });
  }, []);

  const sendStatus = () => {
    if (!cameraImageUri) return;
    navigation.navigate('Status');
    setImageUri(cameraImageUri);
    setImageUriArray({uri: cameraImageUri, time: time});
    // database().ref('status').push({
    //   status: cameraImageUri,
    //   time: database.ServerValue.TIMESTAMP,
    //   uid: auth().currentUser.uid,
    // });
    // database()
    //   .ref('status')
    //   .child( auth().currentUser.uid)
    //   .update({
    //     lastStatus: {
    //       status: status,
    //       time: database.ServerValue.TIMESTAMP,
    //       status: 0,
    //       uid: auth().currentUser.uid,
    //       name:"nametobegiven",
    //       profileImage:"profileImagetobegiven",
    //     },
    //   });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: cameraImageUri}}
        style={styles.imageBackgroundstyle}
      />
      <View style={styles.topContainer}>
        <AntDesign
          onPress={() => navigation.pop()}
          name="arrowleft"
          size={25}
          color="white"
        />
      </View>
      <View style={styles.bottomContainer}>
        <TextInput
          style={styles.textInputContainer}
          placeholder="Add a Caption..."
          onChangeText={(text) => setCaption(text)}
          placeholderStyle={styles.placeholderStyle}
          placeholderTextColor="white"
        />
        <TouchableOpacity
          style={styles.contactsbuttonContainer}
          onPress={() => sendStatus()}>
          <Ionicons name="send" color="white" size={23} style={styles.ionIconsStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setImageUri: (data) => dispatch(setImageUri(data)),
    setImageUriArray: (data) => dispatch(setImageUriArray(data)),
  };
};

export default connect(null, mapDispatchToProps)(ImagePreview);
