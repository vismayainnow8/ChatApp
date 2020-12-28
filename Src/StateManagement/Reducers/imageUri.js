import {IMAGEURI, } from '../Actions/types';

const initialState = {
      
        imageUri: null,

};

const imageUriReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGEURI:
      return {...state, imageUri: action.data};
   
    default:
      return state;
  }
};


export default imageUriReducer;
