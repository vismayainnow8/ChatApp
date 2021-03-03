import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  Image,
  View,
  Pressable,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {
  setUser,
  setChatId,
  search,
  searchBarVisible,
} from '../../StateManagement/Actions';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import styles from './styles';

const Chats = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [searchPressedState, setSearchPressedState] = useState(false);
  const [tabState, setTabState] = useState(false);
  const [chats, setChats] = useState([]);
  const [group, setGroup] = useState([]);
  const [combinedChats, setCombinedChats] = useState([]);
  const [chatItemToDelete, setChatItemToDelete] = useState();
  const pickerLstRef = useRef(null);

  var newdata;
  var searchPressed = useSelector((state) => state.searchPressed.searchPressed);
  var tab = useSelector((state) => state.searchPressed.tabState);
  var keyword = useSelector((state) => state.search.search);

  useEffect(() => {
    let User = combinedChats?.filter(function (item) {
      if (keyword && item.user || item.groupName) {
        if (item.type == 'direct') {
          return item.user?.displayName?.toLowerCase().indexOf(keyword?.toLowerCase()) > -1;
        } else {
          return item.groupName?.toLowerCase().indexOf(keyword?.toLowerCase()) > -1;
        }
      } else { return null }
    });
    if (User.length == 0 || !keyword) {
      setChats(combinedChats);
    } else {
      setChats(User);
    }
  }, [keyword]);

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
          setChats(data);
          callGroupData(data);
        },
        (error) => { },
      );
  }, []);

  const callGroupData = (data) => {
    firestore()
      .collection('Group')
      .where('members', 'array-contains', auth().currentUser.uid)
      .onSnapshot((res) => {
        let groupVariable = [];
        res.forEach((item) => {
          const formatedItem = {
            chatId: item.id,
            ...item.data(),
          };
          formatedItem.user = Object.values(formatedItem.details);
          delete formatedItem.details;
          groupVariable.push(formatedItem);
        });
        setGroup(groupVariable);
        newdata = [...data, ...groupVariable];
        setChats(newdata);
        setCombinedChats(newdata);
        console.log('chats', chats);
        console.log('groupVariable', groupVariable);
        console.log('newdata', newdata);
      });
  };

  useEffect(() => {
    setSearchPressedState(searchPressed);
    setTabState(tab);
  }, [searchPressed, searchPressedState, tab, tabState]);

  const onPressed = (item) => {
    dispatch(searchBarVisible(false));
    dispatch(search(null));
    setUser(item.user);
    setChatId(item.chatId);
    navigation.navigate('ChatScene', item);
    setChats(combinedChats);
  };
  const onLongPressing = (item) => {
    setChatItemToDelete(item)
    pickerLstRef.current.open();
  };

  const callAlert = () => {
    Alert.alert('', 'Are you sure to delete this chat ?', [
      { text: 'CANCEL', onPress: () => pickerLstRef.current.close() },
      { text: 'OK', onPress: () => deleteChat() },
    ]);
  }

  const deleteChat = () => {
    pickerLstRef.current.close();

    if (chatItemToDelete.type == 'indirect') {
      firestore().collection('Group').doc(chatItemToDelete.chatId).delete()
        .then(() => {
          pickerLstRef.current.close();
        })
    }
    else {
      firestore().collection('Chats').doc(chatItemToDelete.chatId).delete()
        .then(() => {
          pickerLstRef.current.close();
        })
    }
  }
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="#075e54" />
      <View style={styles.mainContainer}>
        <FlatList
          data={chats}
          renderItem={({ item }) => (
            <ChatsListItem
              item={item}
              image={item.image}
              first_name={item.first_name}
              missed={item.missed}
              time={item.time}
              date={item.date}
              message={item.message}
              number={item.number}
              type={item.type}
              groupName={item.groupName}
              groupIcon={item.groupIcon}
              onPressed={onPressed}
              onLongPressing={onLongPressing}
            />
          )}
          keyExtractor={(item) => item.chatId}
        />
        <TouchableOpacity
          style={styles.contactsFab}
          onPress={() => navigation.navigate('Select contact')}>
          <IconMaterialCommunityIcons
            name="android-messages"
            color="white"
            size={28}
          />
        </TouchableOpacity>
        <RBSheet
          ref={pickerLstRef}
          height={560}
          customStyles={{
            container: styles.rbSheet,
          }}>
          <TouchableOpacity style={{ flexDirection: "row" }} onPress={() => callAlert()}>
            <AntDesign
              name="delete"
              color="#075e54"
              size={20}
              style={{ padding: 5 }}
            />
            <Text style={styles.gridHeader}>Delete</Text>
          </TouchableOpacity>


        </RBSheet>
      </View>
    </SafeAreaView>
  );
};

const ChatsListItem = ({
  item,
  number,
  onPressed,
  onLongPressing,
  type,
  groupIcon,
  groupName,
}) => {
  const { user, lastMessage } = item;
  return (
    <Pressable
      style={styles.listItemContainer}
      onLongPress={() => onLongPressing(item)}
      onPress={() => onPressed(item)}>
      <View style={styles.iconContainerperson}>
        {type == 'direct' &&
          (user.photoURL ? (
            <Image source={{ uri: user.photoURL }} style={styles.initStyle} />
          ) : (
              <Ionicons name="person" color="white" size={23} />
            ))}
        {type == 'indirect' &&
          (groupIcon ? (
            <Image source={{ uri: groupIcon }} style={styles.initStyle} />
          ) : (
              <IconMaterialCommunityIcons
                name="account-group"
                color="white"
                size={33}
              />
            ))}
      </View>

      <View style={styles.messageContainer}>
        <View style={styles.firstContainer}>
          {/* <Text>{user?.displayName ?? user?.phoneNumber}</Text> */}
          {type == 'direct' && (
            <Text>{user?.displayName ?? user?.phoneNumber}</Text>
          )}
          {type == 'indirect' && <Text>{groupName ?? 'Group'}</Text>}
          <View style={styles.dateContainer}>
            <IconFontAwesome5
              name={lastMessage?.message == 'You deleted this message' ? null : lastMessage?.status ? 'check-double' : 'check'}
              size={10}
              color={lastMessage?.status ? '#ed788b' : '#666'}
            />
            <Text numberOfLines={1} style={lastMessage?.message == 'You deleted this message' ? styles.lastMessageStyle : styles.lastMessage}>
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
    </Pressable>
  );
};

export default Chats;
