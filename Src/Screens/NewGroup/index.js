import React from 'react';
import {Text, FlatList,TextInput,Pressable, Image, View, TouchableOpacity,ActivityIndicator} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import RBSheet from 'react-native-raw-bottom-sheet';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {useCallback,useRef,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Screen, Topbar} from '../../Components';
import {setUsersArray} from '../../StateManagement/Actions';

const NewGroup = ({ navigation }) => {
  const [groupName, setGroupName] = useState(null);
  const [usersArrayState, setUsersArrayState] = useState(null);
  const pickerLstRef = useRef(null);
  const dispatch = useDispatch();
  let usersArray
  // var usersArrayFromRedux = useSelector((state) => state.usersArray.usersArray);
  
  // console.log('no usersArrayFromRedux',usersArrayFromRedux);
  
  const contacts = useSelector((state) =>
    Object.keys(state.contacts.contacts).map(
      (key) => state.contacts.contacts[key],
    ),
  );

  var usersArrayWithId =[]
  usersArrayState.forEach(item => {
    let userData = {};
    userData[item.uid] = item;
    usersArrayWithId.push(userData);
  });

  const selectContact = (item) => {
    console.log('usersArrayWithId',usersArrayWithId)

    if (!usersArrayWithId.includes(item.uid)) {
      usersArray = [ ...usersArrayState, item]
      dispatch(setUsersArray(usersArray))
    console.log('usersArray',usersArray)

    }
    else {
      console.log('user already added')
    }
}
  const openChat = () => {
    pickerLstRef.current.close()
      var usersArrayFromReduxUid = [];
      usersArrayState.forEach(item => {
        let user = {};
        user = item.uid;
        usersArrayFromReduxUid.push(user);
      });

    firestore()
      .collection('Chats')
      .where('type', '==', 'indirect')
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log('no val');
          firestore()
            .collection('Chats')
            .add({
              members: [...usersArrayFromReduxUid, auth().currentUser.uid],
              type: 'indirect',
              details: {
                [auth().currentUser.uid]: {
                  displayName: auth().currentUser.displayName,
                  phoneNumber: auth().currentUser.phoneNumber,
                  photoURL: auth().currentUser.photoURL,
                },
                usersArrayWithId,

              },
              lastMessage: {},
            })
            .then((data) => {

              let chat = {
              groupName:groupName,
                chatId: data.id,
                groupName
                // user: item,
              };
              navigation.navigate('ChatScene', chat,groupName);
            });
        } else {
          console.log('else')
          let chat = {};
          querySnapshot.forEach((data) => {
            console.log('groupNamefgvhbjkl',groupName)
            chat = {
              groupName:groupName,
              chatId: data.id,
              groupName
              // user: item,
            };
          });
          navigation.navigate('ChatScene', chat,groupName);
        }
      }).catch((error) => {
        console.log('errorcatch',error)
      })
  }

  const topbarMenus = [
    {icon: 'refresh',  component: MaterialIcons},
  ];

  const Item = ({photoURL, displayName, phoneNumber, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.listItemContainer}>
      <View style={styles.iconContainerperson}>
        {photoURL ? (
          <Image source={{uri: photoURL}} style={styles.initStyle} />
        ) : (
          <MaterialIcons name="person" color="white" size={23} />
        )}
      </View>
      <View style={styles.nameContainer}>
        <Text>{displayName}</Text>
        <View style={styles.dateContainer}>
          <Text
            numberOfLines={1}
            style={{fontWeight: '400', color: '#666', fontSize: 12}}>
            {phoneNumber}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <Screen>
      <Topbar title="NewGroup" menus={topbarMenus} />
      <FlatList
        style={styles.mainContainer}
        data={contacts}
        renderItem={({item}) => (
          <Item
            displayName={item.displayName}
            photoURL={item.photoURL}
            phoneNumber={item.phoneNumber}
            onPress={() => selectContact(item)}
          />
        )}
        keyExtractor={(item) => item.uid}
      />
       <TouchableOpacity style={styles.contactsbuttonContainer}>
          <Icon
            name="arrow-right"
            color="white"
            size={24}
            style={styles.fabIcon}
            onPress={()=>pickerLstRef.current.open()}
          />
      </TouchableOpacity>
      <RBSheet
        ref={pickerLstRef}
        height={220}
        customStyles={{
          container: styles.modalView,
        }}>
        {
          <View style={{ alignItems: "center", }} >
            <Text style={styles.rbsheetHeading}>PROVIDE GROUP SUBJECT</Text>
            <TextInput
        //  style={}
         style={styles.textInput}
         color="black"
         placeholder="Type here..."
         placeholderTextColor="grey"
              onChangeText={(text)=> setGroupName(text)}
              onSubmitEditing={() => openChat()}

            />
        
            </View>
        }
           <TouchableOpacity style={styles.rooundButtonContainer}>
          <Icon
            name="arrow-right"
            color="white"
            size={24}
            style={styles.fabIcon}
            onPress={()=>openChat()}
          />
      </TouchableOpacity>
      </RBSheet>
    </Screen>
  );
};

export default NewGroup;




