import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {ChatHeaderRight} from '../Components';
import Calls from '../Screens/Calls';
import Chats from '../Screens/Chats';
import Status from '../Screens/Status';
import {consts} from '../Assets/Consts';
import {Store} from '../StateManagement';
import {TABSTATE, SET_SEARCHPRESSED} from '../StateManagement/Actions/types';
import Entypo from 'react-native-vector-icons/Entypo';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export const TabView = ({navigation}) => {
  const [activePage, setActivePage] = useState(1);
  const [, setTabClicked] = useState(false);
  const [tabName, setTabName] = useState(null);
  const [, setGestureName] = useState(null);
  const [searchpressed, setSearchpressed] = useState(false);
  const giveData = (searchpressed) => {
    setSearchpressed(searchpressed);
    if (searchpressed == true && activePage == 1) {
      setTabName('Chats');
    }
    if (searchpressed == true && activePage == 2) {
      setTabName('Status');
    }
    if (searchpressed == true && activePage == 3) {
      setTabName('Calls');
    }
  };
  const screensArray = [<Status />, <Chats />, <Status />, <Calls />];

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <ChatHeaderRight
            type={activePage}
            giveData={(searchpressed) => giveData(searchpressed)}
          />
        );
      },
    });
  });
  Store.dispatch({type: TABSTATE, data: tabName});
  Store.dispatch({type: SET_SEARCHPRESSED, data: searchpressed});
  const setSelectedTab = (val) => {
    setActivePage(val);
    setTabClicked(true);
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  const onSwipeLeft = () => {
    if (activePage != 3) {
      setActivePage(activePage + 1);
    }
  };

  const onSwipeRight = () => {
    if (activePage != 0) {
      setActivePage(activePage - 1);
    }
  };
  const onSwipe = (gestureName) => {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    setGestureName(gestureName);
    switch (gestureName) {
      case SWIPE_UP:
        break;
      case SWIPE_DOWN:
        break;
      case SWIPE_LEFT:
        break;
      case SWIPE_RIGHT:
        break;
    }
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#075e54',
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-evenly',
          flex: 1,
        }}>
        <TouchableOpacity onPress={() => setSelectedTab(0)}>
          <View
            style={[
              Tabstyles.cameraContainer,
              activePage == 0 ? Tabstyles.activeCameraContainer : null,
            ]}>
            <Entypo
              name="camera"
              color="white"
              size={23}
              style={[{color: activePage == 0 ? 'white' : 'grey'}]}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab(1)}>
          <View
            style={[
              Tabstyles.menuContainer,
              activePage == 1 ? Tabstyles.activeMenuContainer : null,
            ]}>
            <Text
              style={[
                Tabstyles.menuText,
                {color: activePage == 1 ? 'white' : 'grey'},
              ]}>
              CHATS
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab(2)}>
          <View
            style={[
              Tabstyles.menuContainer,
              activePage == 2 ? Tabstyles.activeMenuContainer : null,
            ]}>
            <Text
              style={[
                Tabstyles.menuText,
                {color: activePage == 2 ? 'white' : 'grey'},
              ]}>
              STATUS
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab(3)}>
          <View
            style={[
              Tabstyles.menuContainer,
              activePage == 3 ? Tabstyles.activeMenuContainer : null,
            ]}>
            <Text
              style={[
                Tabstyles.menuText,
                {color: activePage == 3 ? 'white' : 'grey'},
              ]}>
              CALLS
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <GestureRecognizer
        onSwipe={(direction, state) => onSwipe(direction, state)}
        onSwipeLeft={(state) => onSwipeLeft(state)}
        onSwipeRight={(state) => onSwipeRight(state)}
        config={config}
        style={{
          flex: 14,
        }}>
        <View
          style={{
            width: '100%',
            flex: 1,
            backgroundColor: 'white',
          }}>
          {screensArray[activePage]}
        </View>
      </GestureRecognizer>
    </View>
  );
};
const Tabstyles = StyleSheet.create({
  cameraContainer: {
    width: consts.ScreenWidth / 10,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#075e54',
  },
  activeCameraContainer: {
    width: consts.ScreenWidth / 10,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#075e54',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  menuContainer: {
    width: consts.ScreenWidth / 3.5,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#075e54',
  },
  activeMenuContainer: {
    width: consts.ScreenWidth / 3.5,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#075e54',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  menuText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
