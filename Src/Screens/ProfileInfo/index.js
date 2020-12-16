import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import {SmallButton} from '../../Components';
import styles from './styles';
import {StackActions} from '@react-navigation/native';

const ProfileInfo = ({navigation}) => {
  const [name, setName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({});
  const pickerLstRef = useRef(null);
  const {phoneNumber, uid} = auth().currentUser;

  const next = async () => {
    if (!name) return;
    setLoading(true);
    try {
      const imageStorageRef = storage().ref('images/dp/' + uid + '.jpeg');
      await imageStorageRef.putFile(image.path);
      const url = await storage()
        .ref('images/dp/' + uid + '.jpeg')
        .getDownloadURL();
      await firestore()
        .collection('Users')
        .doc(uid)
        .set({phoneNumber, photoURL: url, displayName: name});
      await auth().currentUser.updateProfile({
        displayName: name,
        photoURL: url,
      });
      navigation.dispatch(StackActions.replace('WhatsApp'));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
      .then((image) => setImage(image))
      .catch((error) => console.log(error));
  };

  const openCamera = () => {
    pickerLstRef.current.close();
    ImageCropPicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then((image) => setImage(image))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.line}>
        Please provide your name and an optional profile photo
      </Text>
      <Pressable onPress={changeProfilePic}>
        <ImageBackground
          style={styles.imageBackgroundContainer}
          imageStyle={styles.imageBackground}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}>
          {image?.path && (
            <Image source={{uri: image.path}} style={styles.image} />
          )}
        </ImageBackground>
      </Pressable>
      <View style={styles.textinputContainer}>
        <TextInput
          value={name}
          placeholder="Type your name here ...."
          style={styles.phoneNumberContainer}
          onChangeText={setName}
          placeholderStyle={{fontSize: 20}}
        />
      </View>

      <SmallButton
        title="NEXT"
        labelStyle={styles.labelStyle}
        style={styles.style}
        onPress={next}
        loading={loading}
      />
      <RBSheet
        ref={pickerLstRef}
        height={160}
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
    </View>
  );
};

export default ProfileInfo;
