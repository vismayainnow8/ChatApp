import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {AsyncStorage} from 'react-native';
import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';

import Reducers from '../Reducers';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  debug: true, //to get useful logging
};

const middleware = [thunk];

if (__DEV__) {
  middleware.push(logger);
}

const reducers = persistCombineReducers(config, Reducers);
const enhancers = [applyMiddleware(...middleware)];
const initialState = undefined;
const persistConfig = {enhancers};
const Store = createStore(reducers, initialState, compose(...enhancers));
const Persistor = persistStore(Store, persistConfig, () => {
  //   console.log('Test', store.getState());
});
const configureStore = () => {
  return {Persistor, Store};
};

export default configureStore;
