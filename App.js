import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AppNavigation from './Src/Router';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {Store} from './Src/StateManagement';
// import { SearchPressedReducer } from './Src/StateManagement/Reducers/header'
// import createStore from './createReduxStore'

// const store = SearchPressedReducer()
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
