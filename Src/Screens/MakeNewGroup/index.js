import React, { useLayoutEffect } from 'react';
import { Text, FlatList, TextInput, Pressable, Image, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Screen, Topbar } from '../../Components';
import { setUsersArray } from '../../StateManagement/Actions';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
import storage from '@react-native-firebase/storage';
import { StackActions } from '@react-navigation/native';
import { consts } from '../../Assets/Consts';

const MakeNewGroup = ({ navigation, route }) => {
  const pickerLstRef = useRef(null);
  const [image, setImage] = useState({});
  const [groupName, setGroupName] = useState(null);
  const [loading, setLoading] = useState(false);
  const { selectedUsers, usersId } = route.params;
  const { phoneNumber, uid } = auth().currentUser;
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerRight: () => {
      //   return (
      //     <IconAntDesign
      //       onPress={() => alert('search')}
      //       name="search1"
      //       size={24}
      //       color="white"
      //       style={{ paddingRight: 10 }}
      //     />
      //   );
      // },
      headerTitle: (
        <View style={{ justifyContent: "flex-end" }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>
            New Group
          </Text>
          <Text style={{ color: 'white' }}>Add subject and icon</Text>
        </View>
      ),
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
      .then((image) => setImage(image))
      .catch((error) => console.log('errorddddddddd', error));
  };

  const openCamera = () => {
    pickerLstRef.current.close();
    ImageCropPicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(
        (image) =>
          // console.log('image',image)
          setImage(image)
      )
      .catch((error) => console.log('errorfffff', error));
  };




  const openChat = async () => {
    pickerLstRef.current.close()
    setLoading(true)
    let formated = {}
    selectedUsers.forEach(item => {
      formated[item.uid] = item
    });
    var formatphonenumber = [];
    selectedUsers.forEach(item => {
      let user = {};
      user = item.phoneNumber;
      formatphonenumber.push(user);
    });
    try {
      const imageStorageRef = storage().ref('images/dp/' + uid + '.jpeg');
      await imageStorageRef.putFile(image.path);
      const url = await storage()
        .ref('images/dp/' + uid + '.jpeg')
        .getDownloadURL();

      await firestore()
        .collection('Group')
        .add({
          createdBy: auth().currentUser.displayName,
          createdAt: '',
          members: [...usersId, auth().currentUser.uid],
          type: 'indirect',
          groupName: groupName,
          groupIcon: url,
          details: {
            ...formated,
            [auth().currentUser.uid]: {
              displayName: auth().currentUser.displayName,
              phoneNumber: auth().currentUser.phoneNumber,
              photoURL: auth().currentUser.photoURL,
              uid: auth().currentUser.uid,
            },
          },

          lastMessage: {},
        }).then((data) => {
          let chat = {
            chatId: data.id,
            user: {
              displayName: groupName,
              image: image,
              phoneNumber: formatphonenumber
            }
          }
          navigation.navigate('WhatsApp')
          // navigation.dispatch(StackActions.replace('WhatsApp'));
          // onPress={() =>}

          setLoading(false)
        })
    }
    catch (error) {
      console.log('error', error);
    }

  }

  const topbarMenus = [
    { icon: 'refresh', component: MaterialIcons },
  ];


  return (
    <Screen>
      {/* <Topbar title="New Group" menus={topbarMenus} noavatar={'noavatar'} /> */}
      <View style={styles.mainContainer}>
        <Text style={styles.rbsheetHeading}>PROVIDE GROUP SUBJECT  AND GROUP ICON</Text>

        {
          image?.path ? (<Image source={{ uri: image.path }} style={styles.roundButtonContainer} />) : <TouchableOpacity style={styles.roundButtonContainer}>
            <Icon
              name="camera"
              color="white"
              size={24}
              style={styles.cameraIcon}
              onPress={() => changeProfilePic()}
            />
          </TouchableOpacity>
        }

        <TextInput
          style={styles.textInput}
          color="black"
          placeholder="Type here..."
          placeholderTextColor="grey"
          onChangeText={(text) => setGroupName(text)}
          onSubmitEditing={() => openChat()}
        />

        {loading ? (
          <ActivityIndicator
            color="#128c7e"
            size={consts.textSizes(20)}
            style={{ flex: 1, paddingVertical: 30 }}
          />
        ) : (
            <TouchableOpacity style={styles.rooundButtonContainer}>
              <Icon name="check" color="white" size={24} style={styles.fabIcon}
                onPress={() => openChat()}
              />
            </TouchableOpacity>
          )}
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

export default MakeNewGroup;




