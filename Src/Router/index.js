import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {SignInStack} from './signinStack';
import {AppStack} from './appStack';

export const AppNavigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (!user) {
    return <SignInStack />;
  }
  return <AppStack />;
};
