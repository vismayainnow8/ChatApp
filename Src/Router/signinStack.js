import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screens/Login';
import ChooseCountry from '../Screens/ChooseCountry';
import OTPScreen from '../Screens/OTPScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import {noTopBar, signInStackTopbar} from './options';

const Stack = createStackNavigator();

export const SignInStack = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={noTopBar}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={signInStackTopbar('Enter your phone number')}
      />
      <Stack.Screen name="ChooseCountry" component={ChooseCountry} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
    </Stack.Navigator>
  );
};
