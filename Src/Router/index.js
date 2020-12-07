import 'react-native-gesture-handler';
import React from 'react';
import {SignInStack} from './signinStack';
import {AppStack} from './appStack';

export default function AppNavigation() {
  const loggedIn = false;
  if (!!loggedIn) {
    return <SignInStack />;
  }
  return <AppStack />;
}
