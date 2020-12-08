import {COUNTRYCODE, COUNTRYNAME} from '../Actions/types';

const initialState = {
        countryName: 'India',
        countryCode: '+91',

};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRYCODE:
      return {...state, countryName: action.data};
    case COUNTRYNAME:
      return {...state, countryCode: action.data};
    default:
      return state;
  }
};


export default countryReducer;
// export default tabState;
