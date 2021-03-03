import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { AppNavigation } from './Src/Router';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Store } from './Src/StateManagement';
import { UIManager, Platform, AppState, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends Component {
  // componentDidMount() {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //     console.log('A new FCM message arrived!');
  //   })

  // }
  // componentWillUnmount() {

  //   return this.unsubscribe;
  // }

  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </Provider>
    );
  }
}
