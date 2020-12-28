import {IMAGEURI, IMAGEURIARRAY, } from '../Actions/types';

const initialState = {
      
  imageUri: null,
  imageUriArray: [],
  

};

const imageUriReducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGEURI:
      return {...state, imageUri: action.data};
      case IMAGEURIARRAY:
        return {...state, imageUriArray:initialState.imageUriArray.push(action.data)};   
    default:
      return state;
  }
};


export default imageUriReducer;
