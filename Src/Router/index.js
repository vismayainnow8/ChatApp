import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {SignInStack} from './signinStack';
import {AppStack} from './appStack';

export const AppNavigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return subscriber;
  }, []);

  if (!user) {
    return <SignInStack />;
  }
  return <AppStack user={user} />;
};
