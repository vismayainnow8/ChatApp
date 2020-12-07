import searchPressedReducer from './header';
import setConfirmationReducer from './confirmation';
import setTextInputReducer from './textInput';

export default {
  searchPressed: searchPressedReducer,
  confirmation: setConfirmationReducer,
  textInput: setTextInputReducer,
};
