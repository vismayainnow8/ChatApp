import {USER,CHATID} from './types';

export const setUser = (res) => {
  return {
    type: USER,
    data: res,
  };
};
export const setChatId = (res) => {
  return {
    type: CHATID,
    data: res,
  };
};
