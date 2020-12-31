import {
  ADD_CONTACTS,
  RESET_CONTACTS,
  SET_LOADING_CONTACTS,
} from '../Actions/types';

const initialState = {
  loading: false,
  contacts: {},
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACTS:
      const prevContacts = state.contacts;
      return {
        loading: state.loading,
        contacts: {...prevContacts, ...action.contacts},
      };

    case RESET_CONTACTS:
      return initialState;

    case SET_LOADING_CONTACTS:
      return {
        loading: action.loading,
        contacts: state.contacts,
      };

    default:
      return state;
  }
};

export default contactsReducer;
