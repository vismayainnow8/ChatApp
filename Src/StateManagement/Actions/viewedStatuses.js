import {ADD_VIEWED_STATUS, SET_VIEWED_STATUS} from './types';

export const addViewedStatus = (res) => {
  return {
    type: ADD_VIEWED_STATUS,
    uid: res.uid,
    item: res.item,
  };
};

export const setViewedStatus = (res) => {
  return {
    type: SET_VIEWED_STATUS,
    items: res,
  };
};
