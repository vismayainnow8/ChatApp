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
import {useNavigation} from '@react-navigation/native';
import {consts} from '../../Assets/Consts';
import {useSelector} from 'react-redux';
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
    console.log('props', props);
    setSearchPressedState(searchPressed);
    setTabState(tab);
  }, [searchPressed, searchPressedState, tab, tabState]);

  useEffect(() => {
    console.log('gotreduxonaschatstate', props.textInput);
    // alert(props.textInput);
  }, [props.textInput]);

  const onPressed = (item) => {
    navigation.navigate('ChatScene', item);
  };

  const Item = ({image, item, number}) => {
    const {user, lastMessage} = item;
    return (
      <TouchableOpacity
        style={styles.listItemContainer}
        onPress={() => onPressed(item)}>
        <View style={styles.iconContainer}>
          <Image
            source={{uri: image}}
            style={styles.initStyle}
            resizeMode="contain"
          />
        </View>

        <View style={styles.messageContainer}>
          <View style={styles.firstContainer}>
            <Text>{user?.displayName ?? user?.phoneNumber}</Text>
            <Text style={styles.newtime}>{lastMessage?.time}</Text>
          </View>
          <View style={styles.secondContainer}>
            <View style={styles.dateContainer}>
              <IconFontAwesome5
                name={lastMessage?.status ? 'check-double' : 'check'}
                size={10}
                color={lastMessage?.status ? '#ed788b' : '#666'}
              />
              <Text
                numberOfLines={1}
                style={{
                  paddingLeft: 10,
                  fontWeight: '400',
                  color: '#666',
                  fontSize: 12,
                  // flexWrap: 'wrap',
                }}>
                {lastMessage?.message}
              </Text>
            </View>
            <View style={styles.numbercountContainer}>
              <Text style={styles.numberCount}>{number}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  function renderItem({item}) {
    return (
      <Item
        item={item}
        image={item.image}
        first_name={item.first_name}
        missed={item.missed}
        time={item.time}
        date={item.date}
        message={item.message}
        number={item.number}
      />
    );
  }

  return (
    <SafeAreaView style={{width: consts.ScreenWidth, flex: 1}}>
      <StatusBar backgroundColor="#075e54" />
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <FlatList
            data={chats}
            renderItem={renderItem}
            keyExtractor={(item) => item.chatId}
          />
          <TouchableOpacity
            style={styles.contactsbuttonContainer}
            onPress={() => navigation.navigate('Select contact')}>
            <IconMaterialCommunityIcons
              name="android-messages"
              color="white"
              size={23}
              style={{padding: 5}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    textInput: state.textInput.textInput,
  };
};

export default connect(mapStateToProps, null)(Chats);
