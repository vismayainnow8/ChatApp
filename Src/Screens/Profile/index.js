import React,{useLayoutEffect,useState,useEffect,useRef} from 'react';
  import { View, Text, Image,Alert,Pressable ,StatusBar } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ImageCropPicker from 'react-native-image-crop-picker';
import {StackActions} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import auth from '@react-native-firebase/auth';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {useDispatch} from 'react-redux';


const Profile = ({ navigation ,route}) => {
  const _user = auth().currentUser._user;
  const { uid} = auth().currentUser;
  const pickerLstRef = useRef(null);
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  
  useEffect(  ()=> {
    console.log('displayName',_user)
  
  })
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
      .then((image) =>next(image))
      .catch((error) => console.log('errorddddddddd',error));
  };

  const openCamera = () => {
    pickerLstRef.current.close();
    ImageCropPicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then((image) => next(image) )

       
      .catch((error) => console.log('errorfffff',error));
  };

  const next = async (image) => {
    if (image.path) {
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
          .set({ photoURL: url});
        await auth().currentUser.updateProfile({
          photoURL: url,
        });
        navigation.dispatch(StackActions.replace('WhatsApp'));
      } catch (error) {
        console.log('error',error);
      } finally {
        setLoading(false);
      }
    }
    else {
      Alert.alert('', 'Please provide your profile photo ', [
        {text: 'OK', onPress: () => console.log('Cancel Pressed')},
      ]);
    }
    
  };
  return (
    <View style={styles.profileContainer}>
      <StatusBar backgroundColor="#075e54" barStyle="light-content" />
      <View style={styles.imageContainer}>

      <View style={styles.imageBackground}>
        <Image
          style={styles.image}
          source={{
            uri:_user.photoURL ,
          }}
        />
         <View style={styles.cameraIconContainer}>
          <IconFontAwesome5 name="camera" size={25} color="white" onPress={changeProfilePic} />
        </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.editNameContainer}>
          <IconFontAwesome5
            name="user-alt"
            size={18}
            color="#075e54"
            style={styles.icon}
          />
          <View>
            <Text style={styles.heading}>Name</Text>
            <View style={styles.itemContainer}>
          
            <Text style={styles.text}>{_user.displayName}</Text>
            {/* <MDIcon
            name="edit"
            size={12}
            color="#075e54"
            style={styles.icon}
          /> */}
          </View>
          </View>
        </View>
        <View style={styles.editNameContainer}>
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
    </View>
  );
};
export default Profile;
