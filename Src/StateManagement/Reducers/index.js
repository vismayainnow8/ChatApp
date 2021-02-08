import searchPressedReducer from './header';
import setConfirmationReducer from './confirmation';
import setTextInputReducer from './textInput';
import countryReducer from './country';
import firebaseUserReducer from './firebaseUser';
import imageUriReducer from './imageUri';
import searchBarVisibleReducer from './searchBarVisible';
import contactsReducer from './contacts';
import viewedStatusesReducer from './viewedStatuses';
import searchReducer from './search';

export default {
  searchPressed: searchPressedReducer,
  confirmation: setConfirmationReducer,
  textInput: setTextInputReducer,
  country: countryReducer,
  firebaseUser: firebaseUserReducer,
  imageUri: imageUriReducer,
  contacts: contactsReducer,
  viewedStatuses: viewedStatusesReducer,
  search: searchReducer,
  searchBarVisible: searchBarVisibleReducer,
};
