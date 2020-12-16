import {USER, CHATID} from '../Actions/types';

const initialState=null 

const firebaseUser = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      return {...state, user: action.data};
    case CHATID:
      return {...state, chatId: action.data};
    default:
      return state;
  }
};


export default firebaseUser;
