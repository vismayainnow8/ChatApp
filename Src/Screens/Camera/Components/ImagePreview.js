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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { setImageUri,setImageUriArray } from "../../../StateManagement/Actions";

export const ImagePreview = ({ navigation, route ,setImageUri,setImageUriArray},) => {
  const [caption, setCaption] = useState(null);
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [status, setStatus] = useState(null);
  
  const { cameraImageUri ,time} = route.params;
  
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
navigation.navigate('Status')
      setImageUri(cameraImageUri)
      setImageUriArray({uri:cameraImageUri,time:time})
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
    <View
      style={styles.container}>
        <ImageBackground
            source={{uri: cameraImageUri}}
        style={{ height: '100%', width: '100%' }}
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
          placeholderStyle={{fontSize: 20,color:"white"}}
          placeholderTextColor="white"
        />
         <TouchableOpacity
        style={styles.contactsbuttonContainer}
        onPress={() => sendStatus()}>
        <Ionicons
          name="send"
          color="white"
          size={23}
          style={{padding: 5}}
        />
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





const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
  },
  topContainer: {
    // backgroundColor: "blue",
    borderBottomWidth: 0.6,
    borderColor: "black",
    height: 50,
    width: "100%",
    position: "absolute",
    top: 0,
    paddingHorizontal: 5,
    justifyContent:"center"
  },
  bottomContainer: {
    // backgroundColor: "#A0A0A0",
    shadowColor: 'red',
    shadowOpacity: 0.8,
    // shadowRadius: 1,  
    elevation: 5,
    borderTopWidth: 0.6,
    borderColor: "black",
    height: 50,
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 5,
    justifyContent:"center"
  },
  contactsbuttonContainer: {
    bottom: 23,
    right: 10,
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#128C7E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    color:'white'
  }
});
