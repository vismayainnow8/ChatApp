import searchPressedReducer from './header';
import setConfirmationReducer from './confirmation';
import setTextInputReducer from './textInput';
import countryReducer from './country';
import firebaseUserReducer from './firebaseUser';

export default {
  searchPressed: searchPressedReducer,
  confirmation: setConfirmationReducer,
  textInput: setTextInputReducer,
  country: countryReducer,
  firebaseUser: firebaseUserReducer,
};
