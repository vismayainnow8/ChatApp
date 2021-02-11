import React, {useLayoutEffect, useState, useEffect, useMemo} from 'react';
import {
  Text,
  FlatList,
  Pressable,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Contacts from 'react-native-contacts';
import styles from './styles';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Screen, Topbar} from '../../Components';
import {
  generateContacts,
  setContactsLoading,
} from '../../StateManagement/Actions';
import {consts} from '../../Assets/Consts';

const SelectContact = ({navigation}) => {
  var contactState = useSelector((state) =>
    Object.keys(state.contacts.contacts).map(
      (key) => state.contacts.contacts[key],
    ),
  );
  const [searchbarVisible, setSearchbarVisible] = useState(false);
  const [contacts, setContacts] = useState(contactState);
  const [textInput, setTextInput] = useState();
  // const loading = useSelector((state) => state.contacts.loading);
  const dispatch = useDispatch();
  const reloadContacts = () => {
    setContacts(contactState);
    dispatch(generateContacts());
  };

  useEffect(() => {
    dispatch(generateContacts());
  }, []);

  const searchClicked = () => {
    setSearchbarVisible(true);
  };

  const SearchBar = ({visible}) => {
    const onChangeText = (text) => {
      let User = contacts?.filter(function (e) {
        return e.displayName.indexOf(text.toLowerCase()) > -1;
      });
      if (!User.length && !textInput) {
        setContacts(contactState);
        setTextInput(text);
      } else {
        setTextInput(text);
        setContacts(User);
      }
    };

    const cross = () => {
      setTextInput(null);
      setContacts(contactState);
      setSearchbarVisible(false);
    };

    return (
      <>
        {visible && (
          <View style={styles.searchBarStyle}>
            <Feather
              onPress={() => cross()}
              name="arrow-left"
              size={24}
              color="#128c7e"
              style={{paddingRight: 20}}
            />
            <TextInput
              placeholder="Search..."
              autoFocus={true}
              value={textInput}
              onChangeText={(text) => onChangeText(text)}
              style={styles.searchStyle}
            />
            <Entypo
              onPress={() => cross()}
              name="cross"
              size={24}
              color="#128c7e"
              style={styles.entypoStyle}
            />
          </View>
        )}
      </>
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Contacts',
      headerStyle: {
        backgroundColor: '#075e54',
        elevation: 0,
      },
      headerShown: !searchbarVisible,
      headerTintColor: 'white',
      headerRight: () => {
        return (
          <View style={styles.searchView}>
            <TouchableOpacity onPress={() => searchClicked()}>
              <MaterialIcons
                name="search"
                size={24}
                color="white"
                style={styles.searchMaterialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => reloadContacts()}>
              <MaterialIcons
                name="refresh"
                size={24}
                color="white"
                style={styles.refreshMaterialIcon}
              />
            </TouchableOpacity>
          </View>
        );
      },
    });
  });

  const openChat = useCallback((item) => {
    const key =
      item.uid > auth().currentUser.uid
        ? item.uid + '|' + auth().currentUser.uid
        : auth().currentUser.uid + '|' + item.uid;

    firestore()
      .collection('Chats')
      .where('type', '==', 'direct')
      .where('key', '==', key)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log('no val');
          firestore()
            .collection('Chats')
            .add({
              key,
              members: [item.uid, auth().currentUser.uid],
              type: 'direct',
              details: {
                [item.uid]: item,
                [auth().currentUser.uid]: {
                  displayName: auth().currentUser.displayName,
                  phoneNumber: auth().currentUser.phoneNumber,
                  photoURL: auth().currentUser.photoURL,
                },
              },
              lastMessage: {},
            })
            .then((data) => {
              let chat = {
                chatId: data.id,
                user: item,
              };
              navigation.navigate('ChatScene', chat);
            });
        } else {
          let chat = {};
          querySnapshot.forEach((data) => {
            chat = {
              chatId: data.id,
              user: item,
            };
          });
          navigation.navigate('ChatScene', chat);
        }
      })
      .catch((error) => {
        console.log('errorcatch', error);
      });
  }, []);

  // const topbarMenus = [
  //   { icon: 'search', onPress: searchContacts, component: MaterialIcons },
  //   { icon: 'refresh', onPress: reloadContacts, component: MaterialIcons },
  // ];

  const openContactPicker = () => {
    var newPerson = {
      phoneNumbers: [
        {
          label: 'mobile',
          number: '',
        },
      ],
      displayName: '',
    };

    Contacts.openContactForm(newPerson).then((contact) => {
      // contact has been saved
      dispatch(generateContacts());
    });
  };
  const contactView = useMemo(
    () => (
      <FlatList
        style={styles.mainContainer}
        ListHeaderComponent={
          <>
            <Pressable
              style={styles.listItemContainer}
              onPress={() => navigation.navigate('NewGroup')}>
              <View style={styles.iconContainer}>
                <MaterialIcons
                  name="group"
                  color="white"
                  size={23}
                  style={styles.specialIcon}
                />
              </View>
              <View style={styles.nameContainer}>
                <Text>New Group</Text>
                <View style={styles.dateContainer}>
                  <Text numberOfLines={1} style={styles.newGroupText} />
                </View>
              </View>
            </Pressable>
            <Pressable
              style={styles.listItemContainer}
              onPress={() => openContactPicker()}>
              <View style={styles.iconContainer}>
                <MaterialIcons
                  name="person-add"
                  color="white"
                  size={23}
                  style={styles.specialIcon}
                />
              </View>
              <View style={styles.nameContainer}>
                <Text>New Contact</Text>
                <View style={styles.dateContainer}>
                  <Text numberOfLines={1} style={styles.newContactText} />
                </View>
              </View>
            </Pressable>
          </>
        }
        data={contacts}
        renderItem={({item}) => (
          <Item
            displayName={item.displayName}
            photoURL={item.photoURL}
            phoneNumber={item.phoneNumber}
            onPress={() => openChat(item)}
          />
        )}
        keyExtractor={(item) => item.uid}
        ListFooterComponent={
          <>
            <ListFooterLoader />
            <View style={styles.listItemContainer}>
              <View style={styles.iconContainerWoColor}>
                <AntDesign
                  name="questioncircle"
                  color="grey"
                  size={23}
                  style={{padding: 5}}
                />
              </View>
              <TouchableOpacity
                style={styles.callerDetailsContainer}
                onPress={() => navigation.navigate('ContactHelp')}>
                <View style={styles.callerDetailsContainerWrap}>
                  <View style={styles.nameContainer}>
                    <Text>Contacts help</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    ),
    [contacts],
  );
  return (
    <Screen>
      <SearchBar visible={searchbarVisible} />
      <View style={{flex: 1}}>{contactView}</View>
    </Screen>
  );
};

export default SelectContact;

const ListFooterLoader = () => {
  const loading = useSelector((state) => state.contacts.loading);
  console.log(loading, 'loadingloading');
  return (
    <ActivityIndicator
      color="#128c7e"
      animating={loading}
      style={styles.activityIndicator}
    />
  );
};

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
        <Text numberOfLines={1} style={styles.phoneNumberText}>
          {phoneNumber}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);
