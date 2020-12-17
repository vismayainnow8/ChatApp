import React, {useState, useRef, useLayoutEffect, useEffect} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {consts} from '../../Assets/Consts';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useNavigation} from '@react-navigation/native';

import styles from './styles';
const DATA = [
  {
    id: 1,
    first_name: 'Glenn',
    mobile: true,
    message: 'Hey there! I am using WhatsApp',
    date: '22-Mar-2016',
    time: '5:46 PM',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    number: 1,
  },
  {
    id: 2,
    first_name: 'Carl',
    mobile: false,
    message: 'Do you smell what the rock is cooking?',
    date: '22-Feb-2016',
    time: '09:38 PM',
    image: 'https://randomuser.me/api/portraits/women/37.jpg',
    number: 2,
  },
  {
    id: 3,
    first_name: 'Rick',
    mobile: true,
    message: "Hello there it's been a while. Not much",
    date: '01-Jul-2016',
    time: '1:33 PM',
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    number: 3,
  },
];

const Status = (props) => {
  const [loaded, setLoaded] = useState(false);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      tabStyle: {width: 100},
    });
  });

  useEffect(() => {
    console.log('gotreduxonaschatstate', props.textInput);
    // alert(props.textInput);
  }, [props.textInput]);

  const Item = ({image, first_name, missed, time, date, message, number}) => (
    <TouchableOpacity
      style={styles.listItemContainer}
      // onPress={() => onPressed(item.first_name)}
    >
      <View style={styles.iconContainer}>
        <Image
          source={{uri: image}}
          style={styles.initStyle}
          resizeMode="contain"
        />
      </View>

      <View style={styles.messageContainer}>
        <View style={styles.firstContainer}>
          <Text>{first_name}</Text>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.dateContainer}>
            <Text
              numberOfLines={1}
              style={{
                fontWeight: '400',
                color: '#666',
                fontSize: 12,
              }}>
              Yesterday {time}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  function renderItem({item, index}) {
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
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="#075e54" barStyle="light-content" />
      <View style={styles.listItemContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={()=>navigation.navigate('Camera')}>
          <Image
            source={{
              uri: 'https://randomuser.me/api/portraits/men/1.jpg',
            }}
            style={styles.initStyle}
            resizeMode="contain"
          />
          <View style={styles.numbercountContainer}>
            <Text style={styles.numberCount}>+</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.messageContainer}>
          <View style={styles.firstContainer}>
            <Text>My Status</Text>
          </View>
          <View style={styles.secondContainer}>
            <View style={styles.dateContainer}>
              <Text
                numberOfLines={1}
                style={{
                  fontWeight: '400',
                  color: '#666',
                  fontSize: 12,
                }}>
                Tap to add status update
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.updateContainer}>
        <Text style={styles.grey}>Recent Updates</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <View style={styles.updateContainer}>
        <Text style={styles.grey}>Viewed Updates</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
  );
};

const mapStateToProps = (state) => {
  return {
    textInput: state.textInput.textInput,
  };
};

export default connect(mapStateToProps, null)(Status);
