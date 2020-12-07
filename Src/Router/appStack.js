import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
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
import Camera from '../Screens/Camera';
import CallingScreen from '../Screens/CallingScreen';
import VideoCalling from '../Screens/VideoCalling';
import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {TabView} from './homeTabs';

const Stack = createStackNavigator();

const homeRightButtons = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      <Feather
        name="search"
        size={24}
        color="#FFF"
        style={{
          paddingRight: 20,
        }}
      />
      <Entypo
        name="dots-three-vertical"
        size={24}
        color="#FFF"
        style={{
          paddingLeft: 15,
        }}
      />
    </View>
  );
};

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="WhatsApp">
      <Stack.Screen
        name="WhatsApp"
        component={TabView}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#075e54',
            elevation: 0,
          },
          headerTitleAlign: 'left',
          headerRight: homeRightButtons,
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Select contact" component={Contacts} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="NewBroadCast" component={NewBroadCast} />
      <Stack.Screen name="NewGroup" component={NewGroup} />
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
      <Stack.Screen
        name="TwoStepVerification"
        component={TwoStepVerification}
      />
      <Stack.Screen name="RequestAccountInfo" component={RequestAccountInfo} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
      <Stack.Screen name="ChatScene" component={ChatScene} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{headerShown: false}}
      />
      <Stack.Screen name="CallingScreen" component={CallingScreen} />
      <Stack.Screen name="VideoCalling" component={VideoCalling} />
    </Stack.Navigator>
  );
};
