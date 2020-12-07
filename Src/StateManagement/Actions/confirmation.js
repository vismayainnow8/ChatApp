import {SET_CONFIRMATION} from './types';

export const setConfirmation = (res) => {
  return {
    type: SET_CONFIRMATION,
    data: res,
  };
};
