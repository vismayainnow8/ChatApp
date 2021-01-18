import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  Image,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {setUser, setChatId} from '../../StateManagement/Actions';
import {useSelector} from 'react-redux';
import moment from 'moment';
import styles from './styles';

const Chats = (props) => {
  const navigation = useNavigation();
  const [searchPressedState, setSearchPressedState] = useState(false);
  const [tabState, setTabState] = useState(false);
  const [chats, setChats] = useState([]);

  var searchPressed = useSelector((state) => state.searchPressed.searchPressed);
  var tab = useSelector((state) => state.searchPressed.tabState);

  useEffect(() => {
    return firestore()
      .collection('Chats')
      .where('members', 'array-contains', auth().currentUser.uid)
      .onSnapshot(
        (res) => {
          let data = [];
          res.forEach((item) => {
            const formatedItem = {
              chatId: item.id,
              ...item.data(),
            };
            const userId =
              formatedItem.members[
                formatedItem.members[1] == auth().currentUser.uid ? 0 : 1
              ];
            formatedItem.user = formatedItem.details[userId];
            delete formatedItem.details;
            data.push(formatedItem);
          });
          console.log(data);
          setChats(data);
        },
        (error) => {},
      );
  }, []);

  useEffect(() => {
    setSearchPressedState(searchPressed);
    setTabState(tab);
  }, [searchPressed, searchPressedState, tab, tabState]);

  useEffect(() => {
    console.log('gotreduxonaschatstate', props.textInput);
  }, [props.textInput]);

  const onPressed = (item) => {
    navigation.navigate('ChatScene', item);
    setUser(item.user);
    setChatId(item.chatId);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="#075e54" />
      <View style={styles.mainContainer}>
        <FlatList
          data={chats}
          renderItem={({item}) => (
            <ChatsListItem
              item={item}
              image={item.image}
              first_name={item.first_name}
              missed={item.missed}
              time={item.time}
              date={item.date}
              message={item.message}
              number={item.number}
              onPressed={onPressed}
            />
          )}
          keyExtractor={(item) => item.chatId}
        />
        <TouchableOpacity style={styles.contactsFab}>
          <IconMaterialCommunityIcons
            onPress={() => navigation.navigate('Select contact')}
            name="android-messages"
            color="white"
            size={28}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const ChatsListItem = ({ item, number, onPressed }) => {
  const {user, lastMessage} = item;
  return (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => onPressed(item)}>
      <View style={styles.iconContainerperson}>
        {user?
         ( user.photoURL ? (
          <Image source={{uri: user.photoURL}} style={styles.initStyle} />
        ) : (
          <IconMaterialCommunityIcons name="person" color="white" size={23} />
            )):   <IconMaterialCommunityIcons name="account-group" color="white" size={23} />
        }
      
      </View>

      <View style={styles.messageContainer}>
        <View style={styles.firstContainer}>
          <Text>{user?.displayName ?? user?.phoneNumber}</Text>

          <View style={styles.dateContainer}>
            <IconFontAwesome5
              name={lastMessage?.status ? 'check-double' : 'check'}
              size={10}
              color={lastMessage?.status ? '#ed788b' : '#666'}
            />
            <Text numberOfLines={1} style={styles.lastMessage}>
              {lastMessage?.message}
            </Text>
          </View>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.newtime}>
            {lastMessage?.time && moment(lastMessage.time).format('h:mm a')}
          </Text>
          {/* <View style={styles.numbercountContainer}>
            <Text style={styles.numberCount}>{number}</Text>
          </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Chats;
