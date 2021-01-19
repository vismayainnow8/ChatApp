import React from 'react';
import {Text, FlatList,TextInput,Pressable, Image, View, TouchableOpacity,ActivityIndicator} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImageCropPicker from 'react-native-image-crop-picker';
import {useCallback,useRef,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Screen, Topbar} from '../../Components';
import {setUsersArray} from '../../StateManagement/Actions';
import MDIcon from 'react-native-vector-icons/MaterialIcons';

const NewGroup = ({ navigation,route }) => {
  const pickerLstRef = useRef(null);
  const [image, setImage] = useState({});
  const [groupName, setGroupName] = useState(null);
  const { selectedUsers, usersId } = route.params;


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
      .then((image) =>setImage(image))
      .catch((error) => console.log('errorddddddddd',error));
  };

  const openCamera = () => {
    pickerLstRef.current.close();
    ImageCropPicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then((image) => setImage(image) )
      .catch((error) => console.log('errorfffff',error));
  };

  const openChat = () => {
    pickerLstRef.current.close()
    firestore()
      .collection('Chats')
      .where('type', '==', 'indirect')
      .get()
      .then((querySnapshot) => {
          let chat = {};
          querySnapshot.forEach((data) => {
            chat = {
              groupName:groupName,
              chatId: data.id,
              groupName,
              image:image
            };
          });
          navigation.navigate('ChatScene', chat,groupName,image);
      }).catch((error) => {
        console.log('errorcatch',error)
      })
  }

  const topbarMenus = [
    {icon: 'refresh',  component: MaterialIcons},
  ];

  
  return (
    <Screen>
      <Topbar title="NewGroup" menus={topbarMenus} />
      <View style={styles.mainContainer}>
        <Text style={styles.rbsheetHeading}>PROVIDE GROUP SUBJECT  AND GROUP ICON</Text>
     
        {
         image?.path?   ( <Image source={{uri: image.path}} style={styles.roundButtonContainer} />): <TouchableOpacity style={styles.roundButtonContainer}>
         <Icon
           name="camera"
           color="white"
           size={24}
           style={styles.cameraIcon}
           onPress={()=>changeProfilePic()}
         />
           </TouchableOpacity>
        }
           
            <TextInput
         style={styles.textInput}
         color="black"
         placeholder="Type here..."
         placeholderTextColor="grey"
              onChangeText={(text)=> setGroupName(text)}
              onSubmitEditing={() => openChat()}
              />
           <TouchableOpacity style={styles.rooundButtonContainer}>
          <Icon
            name="check"
            color="white"
            size={24}
            style={styles.fabIcon}
            onPress={()=>openChat()}
          />
            </TouchableOpacity>
      </View>
      <RBSheet
        ref={pickerLstRef}
        height={560}
        customStyles={{
          container: styles.rbSheet,
        }}>
        <Text style={styles.gridHeader}>Group Icon</Text>
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
     
    </Screen>
  );
};

export default NewGroup;




