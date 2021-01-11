import {SET_CONFIRMATION, TABSTATE} from '../Actions/types';

const initialState = {
  confirmation: 'not yet',
};

const setConfirmation = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONFIRMATION:
      return action.data
    default:
      return state;
  }
};

export default setConfirmation;
