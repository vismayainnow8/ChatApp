import React from 'react';
import Calls from '../Screens/Calls';
import Chats from '../Screens/Chats';
import Status from '../Screens/Status';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export const TabView = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Status2" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};
