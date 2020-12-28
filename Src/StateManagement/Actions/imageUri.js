import {IMAGEURI,IMAGEURIARRAY} from './types';

export const setImageUri = (res) => {
  return {
    type: IMAGEURI,
    data: res,
  };
};

export const setImageUriArray = (res) => {
  return {
    type: IMAGEURIARRAY,
    data: res,
  };
};

