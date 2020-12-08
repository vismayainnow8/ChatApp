import searchPressedReducer from './header';
import setConfirmationReducer from './confirmation';
import setTextInputReducer from './textInput';
import countryReducer from './country';

export default {
  searchPressed: searchPressedReducer,
  confirmation: setConfirmationReducer,
  textInput: setTextInputReducer,
  country: countryReducer,
};
