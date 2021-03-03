import React, { useLayoutEffect, useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Image, Alert, Pressable, StatusBar, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ImageCropPicker from 'react-native-image-crop-picker';
import { StackActions } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import auth from '@react-native-firebase/auth';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { consts } from '../../Assets/Consts';
import { setTextInput } from '../../StateManagement/Actions';


const Profile = ({ navigation, route }) => {

  const _user = auth().currentUser._user;
  const { uid } = auth().currentUser;
  const pickerLstRef = useRef(null);
  const pickerNameRef = useRef(null);
  const [image, setImage] = useState({});
  const [name, setName] = useState(auth().currentUser.displayName);
  const [textInputValue, setTextInputValue] = useState({});
  const [profileImage, setProfileImage] = useState(_user.photoURL);
  const [loading, setLoading] = useState(false);
  const [nameLoader, setNameLoader] = useState(false);
  // const [nameLoader, setNameLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {

  }, [nameLoader])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Profile Info',
      headerStyle: {
        backgroundColor: '#075e54',
        elevation: 0,
      },
      headerTintColor: 'white',
    });
  });

  const changeProfilePic = () => {
    pickerLstRef.current.open();
  };

  const openPicker = () => {
    pickerLstRef.current.close();
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then((image) => setImage(image),
        next()
      )
      .catch((error) => console.log('errorddddddddd', error));
  };

  const openCamera = () => {
    pickerLstRef.current.close();
    ImageCropPicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then((image) => setImage(image),
        next()
      )
      .catch((error) => console.log('errorfffff', error));
  };

  const onChangeText = (text) => {
    setTextInputValue(text)
    setName(text)

  }
  const next = async () => {
    if (image.path) {
      setNameLoader(true);
      try {
        const imageStorageRef = storage().ref('images/dp/' + uid + '.jpeg');
        await imageStorageRef.putFile(image.path);
        const url = await storage()
          .ref('images/dp/' + uid + '.jpeg')
          .getDownloadURL();
        await firestore()
          .collection('Users')
          .doc(uid)
          .update({ photoURL: url });
        await auth().currentUser.updateProfile({
          photoURL: url,
        });
      } catch (error) {
        console.log('error', error);
      } finally {
        setNameLoader(false);
      }
    }
    else {
      Alert.alert('', 'Please provide your profile photo ', [
        { text: 'OK', onPress: () => console.log('Cancel Pressed') },
      ]);
    }

  };


  const saveName = async () => {
    if (textInputValue) {
      // setLoading(true);
      try {
        await firestore()
          .collection('Users')
          .doc(uid)
          .update({ displayName: textInputValue });
        await auth().currentUser.updateProfile({
          displayName: textInputValue,
        });
        pickerNameRef.current.close()
      } catch (error) {
        pickerNameRef.current.close()
        console.log('error', error);
      } finally {
        // setLoading(false);
      }
    }
    else {
      Alert.alert('', 'Please provide your updated name ', [
        { text: 'OK', onPress: () => console.log('Cancel Pressed') },
      ]);
    }

  };


  return (
    <View style={styles.profileContainer}>
      <StatusBar backgroundColor="#075e54" barStyle="light-content" />
      <View style={styles.imageContainer}>

        <View style={styles.imageBackground}>
          {loading ? (
            <ActivityIndicator
              color="#128c7e"
              size={consts.textSizes(20)}
              style={{ flex: 1, paddingVertical: 30 }}
            />
          ) :
            <View>
              <Image
                style={styles.image}
                source={{
                  uri: image?.path ?? _user.photoURL,
                }}
              />
              {/* {image?.path && (
                <Image source={{ uri: image.path }} style={styles.image} />
              )} */}
            </View>
          }
          <View style={styles.cameraIconContainer}>
            <IconFontAwesome5 name="camera" size={25} color="white" onPress={changeProfilePic} />
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>

        <View style={styles.editNameContainer}>
          <View style={{ flexDirection: "row" }}>
            <IconFontAwesome5
              name="user-alt"
              size={18}
              color="#075e54"
              style={styles.icon}
            />
            <View>
              <Text style={styles.heading}>Name</Text>
              <Text style={styles.text}>{_user.displayName}</Text>
            </View>

          </View>
          <MDIcon
            name="edit"
            size={18}
            color="grey"
            onPress={() => pickerNameRef.current.open()}
            style={styles.iconEdit}
          />
        </View>



        <View style={styles.editPhoneContainer}>
          <IconFontAwesome5
            name="phone-alt"
            size={18}
            color="#075e54"
            style={styles.icon}
          />
          <View>
            <Text style={styles.heading}>Phone</Text>
            <View style={styles.itemContainer}>
              <Text style={styles.text}>{_user.phoneNumber}</Text>
            </View>
          </View>
        </View>


      </View>
      <RBSheet
        ref={pickerLstRef}
        height={560}
        customStyles={{
          container: styles.rbSheet,
        }}>
        <Text style={styles.gridHeader}>Profile Photo</Text>
        <View style={styles.gridContainer}>
          <Pressable
            key="photo-camera"
            onPress={openCamera}
            style={styles.gridButtonContainer}>
            <View style={[styles.gridButton]}>
              <MDIcon name="photo-camera" style={styles.gridIcon} />
            </View>
            <Text style={styles.gridLabel}>Take photo</Text>
          </Pressable>
          <Pressable
            key="photo"
            onPress={openPicker}
            style={styles.gridButtonContainer}>
            <View style={[styles.gridButton]}>
              <MDIcon name="photo" style={styles.gridIcon} />
            </View>
            <Text style={styles.gridLabel}>Choose Image</Text>
          </Pressable>
        </View>
      </RBSheet>
      <RBSheet
        ref={pickerNameRef}
        height={560}
        customStyles={{
          container: [styles.rbSheet,]

        }}>
        <Text style={[styles.alertText, { paddingBottom: 10 }]}>EDIT NAME </Text>
        <View style={styles.gridContainer}>
          <TextInput
            style={styles.textInput}
            color="black"
            placeholder="Type here..."
            value={name}
            placeholderTextColor="grey"
            onChangeText={(text) => onChangeText(text)}
          // onSubmitEditing={() => openChat()}


          />

        </View>
        <View style={{ flexDirection: "row", marginTop: 25, alignSelf: "flex-end" }}>
          <Pressable
            onPress={() => pickerNameRef.current.close()}>
            <Text style={[styles.alertText, { paddingRight: 35 }]}>CANCEL</Text>

          </Pressable>
          <Pressable
            onPress={() => saveName()}>
            <Text style={[styles.alertText, { paddingRight: 20 }]}>SAVE</Text>

          </Pressable>
        </View>
      </RBSheet>

    </View>
  );
};
export default Profile;
