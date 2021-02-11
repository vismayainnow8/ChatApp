import 'react-native-gesture-handler';
import { consts } from '../Assets/Consts';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  TextInput,
  UIManager,
  LayoutAnimation,
  Platform,
} from 'react-native';
import Contacts from '../Screens/Contacts';
import Message from '../Screens/Message';
import Profile from '../Screens/Profile';
import NewGroup from '../Screens/NewGroup';
import NewBroadCast from '../Screens/NewBroadCast';
import WhatsAppWeb from '../Screens/WhatsAppWeb';
import Settings from '../Screens/Settings';
import Account from '../Screens/Account';
import ChatSettings from '../Screens/ChatSettings';
import Notifications from '../Screens/Notifications';
import DataStorageUsage from '../Screens/DataStorageUsage';
import Security from '../Screens/Security';
import Help from '../Screens/Help';
import ChangeNumber from '../Screens/ChangeNumber';
import StarredMessages from '../Screens/StarredMessages';
import Privacy from '../Screens/Privacy';
import TwoStepVerification from '../Screens/TwoStepVerification';
import RequestAccountInfo from '../Screens/RequestAccountInfo';
import DeleteAccount from '../Screens/DeleteAccount';
import ChatScene from '../Screens/ChatScene';
import CallingScreen from '../Screens/CallingScreen';
import VideoCalling from '../Screens/VideoCalling';
import Camera from '../Screens/Camera';
import ViewStatus from '../Screens/ViewStatus';
import ViewContact from '../Screens/ViewContact';
import ViewMedia from '../Screens/ViewMedia';
import ContactHelp from '../Screens/ContactHelp';
import MakeNewGroup from '../Screens/MakeNewGroup';
import { ImagePreview } from '../Screens/Camera/Components';
import ProfileInfo from '../Screens/ProfileInfo';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { TabView } from './homeTabs';
import { appStackTopbar, noTopBar, signInStackTopbar } from './options';
import { search, searchBarVisible } from '.././StateManagement/Actions';

const Stack = createStackNavigator();

const HomeRightButtons = ({ openSearch }) => {
  const navigation = useNavigation();

  var _menu = null;

  const showMenu = () => {
    _menu.show();
  };

  const onPress = () => {
    _menu.hide();
    navigation.navigate('Profile')
  };
  const setMenuRef = (ref) => {
    _menu = ref;
  };
  const MenuOptions = (
    <View style={{ backgroundColor: 'white' }}>
      <MenuItem onPress={() => onPress()}  >
        Profile
      </MenuItem>

    </View>
  );
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      <Feather
        onPress={openSearch}
        name="search"
        size={24}
        color="#FFF"
        style={{
          paddingRight: 20,
        }}
      />
      <View>
        <Menu
          ref={(ref) => setMenuRef(ref)}
          button={
            <Entypo
              onPress={() => showMenu()}
              name="dots-three-vertical"
              size={24}
              color="white"
            />
          }>
          {MenuOptions}
        </Menu>
      </View>


    </View>
  );
};

export const AppStack = ({ user }) => {
  const dispatch = useDispatch();
  var visibilityRedux = useSelector((state) => state.searchBarVisible.searchBarVisible);
  const [searchbarVisible, setSearchbarVisible] = useState(false);

  const openSearch = () => {
    setSearchbarVisible(true)
    dispatch(searchBarVisible(true))

  }

  useEffect(() => {
    // ChatScenePress()
    setSearchbarVisible(visibilityRedux)
  }, [visibilityRedux]);

  const closeSearch = () => {
    setSearchbarVisible(false)
    dispatch(searchBarVisible(false))
    dispatch(search(null))
  }
  return (
    <>
      <Stack.Navigator>
        {!user.displayName && (
          <Stack.Screen
            name="ProfileInfo"
            component={ProfileInfo}
            options={signInStackTopbar('Profile Info')}
          />
        )}
        <Stack.Screen
          name="WhatsApp"
          component={TabView}
          options={{
            ...appStackTopbar('WhatsApp'),
            headerShown: !searchbarVisible,
            headerRight: () => (
              <HomeRightButtons openSearch={() => openSearch()} />
            ),
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="Select contact"
          component={Contacts}
          options={noTopBar}
        />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="NewBroadCast" component={NewBroadCast} />
        <Stack.Screen name="NewGroup" component={NewGroup} options={{ headerShown: false, }} />
        <Stack.Screen name="WhatsAppWeb" component={WhatsAppWeb} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="ChatSettings" component={ChatSettings} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="DataStorageUsage" component={DataStorageUsage} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="ChangeNumber" component={ChangeNumber} />
        <Stack.Screen name="StarredMessages" component={StarredMessages} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="ContactHelp" component={ContactHelp} />
        <Stack.Screen name="MakeNewGroup" component={MakeNewGroup} />
        <Stack.Screen
          name="ViewStatus"
          component={ViewStatus}
          options={noTopBar}
        />
        <Stack.Screen name="ImagePreview" component={ImagePreview} />
        <Stack.Screen
          name="ViewContact"
          component={ViewContact}
          options={noTopBar}
        />
        <Stack.Screen
          name="ViewMedia"
          component={ViewMedia}
          options={noTopBar}
        />
        <Stack.Screen
          name="TwoStepVerification"
          component={TwoStepVerification}
        />
        <Stack.Screen
          name="RequestAccountInfo"
          component={RequestAccountInfo}
        />
        <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
        <Stack.Screen
          name="ChatScene"
          component={ChatScene}
          options={noTopBar}
        />
        <Stack.Screen name="CallingScreen" component={CallingScreen} />
        <Stack.Screen name="VideoCalling" component={VideoCalling} />
      </Stack.Navigator>
      <SearchBar
        visible={searchbarVisible}
        closeSearch={() => closeSearch()}
      />
    </>
  );
};

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const SearchBar = ({ visible, closeSearch }) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  const [textInput, setTextInput] = useState(null);
  const dispatch = useDispatch();
  var visibilityRedux = useSelector((state) => state.searchBarVisible.searchBarVisible);
  var searchRedux = useSelector((state) => state.search.search);

  const submit = () => {

  }

  const onChangeText = (text) => {
    setTextInput(text)
    dispatch(search(text));
  }

  const cross = () => {
    setTextInput(null)
    dispatch(search(null));
  }

  useEffect(() => {
    setTextInput(searchRedux)
  }, [searchRedux]);

  return (
    <>
      {visible && (
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
            width: '100%',
            marginTop:40
          }}>
          <Feather
            onPress={closeSearch}
            name="arrow-left"
            size={24}
            color="#128c7e"
            style={{
              paddingRight: 20,
            }}
          />
          <TextInput
            placeholder="Search..."
            autoFocus={true}
            style={{
              width: consts.ScreenWidth / 1.35,
            }}
            value={textInput}
            onChangeText={(text) => onChangeText(text)}
            onSubmitEditing={() => submit()} />
          {/* <TabView screenProps={{ searchValue: textInput }} /> */}

          <Entypo
            onPress={() => cross()}
            name="cross"
            size={24}
            color="#128c7e"
            style={{
              paddingLeft: 15,
            }}
          />
        </View>
      )}
    </>
  );
};
