import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {AppNavigation} from './Src/Router';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Store} from './Src/StateManagement';

export default class App extends Component {
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
