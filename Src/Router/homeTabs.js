import React from 'react';
import Calls from '../Screens/Calls';
import Chats from '../Screens/Chats';
import Status from '../Screens/Status';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export const TabView = () => {
  return (
    <Tab.Navigator
    // tabBarOptions={
    //   {
    //           activeTintColor: 'white',
    //           inactiveTintColor: 'grey',
    //           labelStyle: { fontSize: 12 },
    //           style: { backgroundColor: '#075e54', height: consts.ScreenWidth * 0.16 },
    //           tabBarPosition: 'top',
    //           swipeEnabled: true,
    //           animationEnabled: true,
    //           indicatorStyle: {
    //                   backgroundColor: "white",
    //           },
    //   }
// }
 >
      <Tab.Screen name="CAMERA" component={Status} />
      <Tab.Screen name="CHATS" component={Chats} />
      <Tab.Screen name="STATUS" component={Status} />
      <Tab.Screen name="CALLS" component={Calls} />
    </Tab.Navigator>
  );
};
