import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
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
import database from '@react-native-firebase/database';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { setUser,setChatId  } from '../../StateManagement/Actions';
import {consts} from '../../Assets/Consts';
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
    return database()
      .ref()
      .child('userChat')
      .child(auth().currentUser.uid)
      .on('value', (snapshot) => {
        if (!snapshot) {
          return;
        }
        const value = snapshot.val();
        let formatedValues = [];
        Object.keys(value ?? {}).forEach((item) => {
          formatedValues.push({...value[item], chatId: item});
        });
        setChats(formatedValues);
      });
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
    setUser(item.user)
    setChatId(item.chatId)
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


const ChatsListItem = ({image, item, number, onPressed}) => {
  const {user, lastMessage} = item;
  return (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => onPressed(item)}>
      {/* <View style={styles.iconContainer}>
        <Image
          source={{uri: image}}
          style={styles.initStyle}
          resizeMode="contain"
        />
      </View> */}

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
          <View style={styles.numbercountContainer}>
            <Text style={styles.numberCount}>{number}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};


const mapStateToProps = (state) => {
  return {
    textInput: state.textInput.textInput,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setUser: (item) => dispatch(setUser(item)),
    setChatId: (item) => dispatch(setChatId(item)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
