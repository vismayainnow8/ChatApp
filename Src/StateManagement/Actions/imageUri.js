import {IMAGEURI} from './types';

export const setImageUri = (res) => {
  return {
    type: IMAGEURI,
    data: res,
  };
};

