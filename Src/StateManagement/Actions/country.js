import {COUNTRYCODE,COUNTRYNAME} from './types';

export const setCountryName = (res) => {
  return {
    type: COUNTRYNAME,
    data: res,
  };
};
export const setCountryCode = (res) => {
  return {
    type: COUNTRYCODE,
    data: res,
  };
};
