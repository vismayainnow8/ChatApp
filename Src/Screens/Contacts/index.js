import React from 'react';
import {Text, FlatList, Image, View, ActivityIndicator} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Screen, Topbar} from '../../Components';
import {generateContacts} from '../../StateManagement/Actions';

const Contacts = ({navigation}) => {
  const contacts = useSelector((state) =>
    Object.keys(state.contacts.contacts).map(
      (key) => state.contacts.contacts[key],
    ),
  );
  const loading = useSelector((state) => state.contacts.loading);
  const dispatch = useDispatch();
  const reloadContacts = () => dispatch(generateContacts());

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

  const topbarMenus = [
    {icon: 'refresh', onPress: reloadContacts, component: MaterialIcons},
  ];

  return (
    <Screen>
      <Topbar title="Contacts" menus={topbarMenus} />
      <FlatList
        style={styles.mainContainer}
        ListHeaderComponent={
          <>
            <View style={styles.listItemContainer}>
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
                <MaterialIcons
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
            <ListFooterLoader loading={loading} />
            <View style={styles.listItemContainer}>
              <View style={styles.iconContainerWoColor}>
                <Icon
                  name="share"
                  color="grey"
                  size={23}
                  style={{padding: 5}}
                />
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
          </>
        }
      />
    </Screen>
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
