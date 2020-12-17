import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  ScrollView,
  FlatList,
  Platform,
  PermissionsAndroid,
  SafeAreaView,
  StatusBar,
  Image,
  View,
  ActivityIndicator,
} from 'react-native';
import Contact from 'react-native-contacts';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useCallback} from 'react';

let start;
const Contacts = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  const contactsMap = useRef();
  const contactsArray = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    start = new Date().getTime();
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
      }).then(() => {
        loadContacts();
        console.log('useffected worked');
      });
    } else {
      loadContacts();
      console.log('useffected failed');
    }
  }, []);

  const loadContacts = () => {
    console.log('A', new Date().getTime() - start);
    Contact.getAll().then((contacts) => {
      setLoading(true);
      setContacts([]);
      let filteredContacts = contacts.filter((item) =>
        Boolean(item.phoneNumbers.length),
      );
      contactsMap.current = filteredContacts.reduce((prev, current) => {
        let newMap = current.phoneNumbers.reduce((newPrev, newCurrent) => {
          if (newCurrent.number.replace(/[^0-9+]/g, '').length < 7)
            return newPrev;
          return {
            ...newPrev,
            [newCurrent.number.replace(/[^0-9+]/g, '')]: current.displayName,
          };
        }, {});
        return {...prev, ...newMap};
      }, {});
      contactsArray.current = Object.keys(contactsMap.current);
      checkContactsInServer(contactsArray.current);
    });
  };

  const checkContactsInServer = (phoneContacts) => {
    let contactsChunks = [];
    for (let i = 0; i < Math.ceil(phoneContacts.length / 10); i++) {
      contactsChunks.push(phoneContacts.slice(i * 10, (i + 1) * 10));
    }
    console.log('B', new Date().getTime() - start);
    Promise.all(
      contactsChunks.map((chunk) =>
        firestore()
          .collection('Users')
          .where('phoneNumber', 'in', chunk)
          .get()
          .then((querySnapshot) => {
            let data = [];
            querySnapshot.forEach((documentSnapshot) => {
              data.push({
                uid: documentSnapshot.id,
                ...documentSnapshot.data(),
              });
            });
            setContacts((contacts) => [...contacts, ...data]);
          }),
      ),
    ).finally(() => {
      setLoading(false);
    });
  };

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
      });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#075e54" barStyle="light-content" />
      <ScrollView style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.listItemContainer}>
            <View style={styles.iconContainer}>
              <IconMaterialIcons
                name="group"
                color="white"
                size={23}
                style={styles.specialIcon}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text>New Group</Text>
              <View style={styles.dateContainer}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: '400',
                    color: '#666',
                    fontSize: 12,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.listItemContainer}>
            <View style={styles.iconContainer}>
              <IconMaterialIcons
                name="group"
                color="white"
                size={23}
                style={styles.specialIcon}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text>New Contact</Text>
              <View style={styles.dateContainer}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: '400',
                    color: '#666',
                    fontSize: 12,
                  }}
                />
              </View>
            </View>
          </View>

          <FlatList
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
            ListFooterComponent={<ListFooterLoader loading={loading} />}
          />
          <View style={styles.listItemContainer}>
            <View style={styles.iconContainerWoColor}>
              <Icon name="share" color="grey" size={23} style={{padding: 5}} />
            </View>
            <View style={styles.callerDetailsContainer}>
              <View style={styles.callerDetailsContainerWrap}>
                <View style={styles.nameContainer}>
                  <Text>Invite friends</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.listItemContainer}>
            <View style={styles.iconContainerWoColor}>
              <IconAntDesign
                name="questioncircle"
                color="grey"
                size={23}
                style={{padding: 5}}
              />
            </View>
            <View style={styles.callerDetailsContainer}>
              <View style={styles.callerDetailsContainerWrap}>
                <View style={styles.nameContainer}>
                  <Text>Contacts help</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contacts;

const ListFooterLoader = ({loading = false}) => (
  <ActivityIndicator
    color="red"
    animating={loading}
    style={{height: 50, alignSelf: 'center'}}
  />
);

const Item = ({photoURL, displayName, phoneNumber, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.listItemContainer}>
    <View style={styles.iconContainerperson}>
      {photoURL ? (
        <Image source={{uri: photoURL}} style={styles.initStyle} />
      ) : (
        <IconMaterialIcons name="person" color="white" size={23} />
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
