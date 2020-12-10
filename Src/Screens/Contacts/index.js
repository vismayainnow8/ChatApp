import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  FlatList,
  SafeAreaView,
  StatusBar,
  Image,
  View,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Contacts = ({navigation}) => {
  const [] = useState(false);
  let [contacts, setContacts] = useState([]);
  const [selectedItem] = useState(null);

  useEffect(() => {
    database()
      .ref('contacts')
      .once('value', (snapshot) => {
        const value = snapshot.val();
        let formatedValues = [];
        Object.keys(value ?? {}).forEach((item) => {
          formatedValues.push({
            displayName: value[item].displayName,
            phoneNumber: value[item].phoneNumber,
            uid: value[item].uid,
          });
        });
        setContacts(formatedValues);
      });
  }, []);

  const onPressed = (item) => {
    database()
      .ref('userChat')
      .child(item.uid)
      .orderByChild('user/uid')
      .equalTo(auth().currentUser.uid)
      .once('value', (snapshot) => {
        const val = snapshot.val();
        if (!val) {
          console.log('no val');
          const data = database()
            .ref('userChat')
            .child(item.uid)
            .push({
              lastMessage: {},
              user: {
                displayName: auth().currentUser.displayName,
                phoneNumber: auth().currentUser.phoneNumber,
                uid: auth().currentUser.uid,
              },
            });
          database()
            .ref('userChat')
            .child(auth().currentUser.uid)
            .update({
              [data.key]: {
                lastMessage: {},
                user: item,
              },
            });
          navigation.navigate('ChatScene', {user: item, chatId: data.key});
        } else {
          navigation.navigate('ChatScene', {
            user: item,
            chatId: Object.keys(val)[0],
          });
        }
      });
  };

  const Item = ({image, item}) => (
    <TouchableOpacity
      onPress={() => onPressed(item)}
      style={styles.listItemContainer}>
      <View style={styles.iconContainerperson}>
        {image ? (
          <Image
            source={{uri: image}}
            style={styles.initStyle}
            resizeMode="contain"
          />
        ) : (
          <IconMaterialIcons name="person" color="white" size={23} />
        )}
      </View>
      <View style={styles.nameContainer}>
        <Text>{item.displayName ?? item.phoneNumber}</Text>
        <View style={styles.dateContainer}>
          <Text
            numberOfLines={1}
            style={{fontWeight: '400', color: '#666', fontSize: 12}}>
            {item.uid}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  function renderItem({item}) {
    return (
      <Item
        item={item}
        image={item.image}
        displayName={item.displayName}
        missed={item.missed}
        time={item.time}
        date={item.date}
        message={item.id}
        number={item.number}
      />
    );
  }

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

          <FlatList data={contacts} renderItem={renderItem} />
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
