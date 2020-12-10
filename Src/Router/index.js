import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {SignInStack} from './signinStack';
import {AppStack} from './appStack';

export const AppNavigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      database()
        .ref()
        .child('contacts')
        .update({
          [user.phoneNumber]: {uid: user.uid, phoneNumber: user.phoneNumber},
        });
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  if (!user) {
    return <SignInStack />;
  }
  return <AppStack />;
};
