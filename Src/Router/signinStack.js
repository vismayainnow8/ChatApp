import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login';
import ChooseCountry from '../Screens/ChooseCountry';
import OTPScreen from '../Screens/OTPScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import {AppStack} from './appStack';

const Stack = createStackNavigator();

export const SignInStack = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        // headerShown={false}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ChooseCountry" component={ChooseCountry} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="AppStack" component={AppStack}
        headerShown={false}
        
        />
    </Stack.Navigator>
  );
};
