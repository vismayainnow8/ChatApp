import {ADD_VIEWED_STATUS, SET_VIEWED_STATUS} from '../Actions/types';

const initialState = {};

const viewedStatusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIEWED_STATUS:
      let userViewedStatuses = state[action.uid] ?? [];
      userViewedStatuses.push(action.item);
      return {...state, [action.uid]: userViewedStatuses};

    case SET_VIEWED_STATUS:
      return action.items;

    default:
      return state;
  }
};

export default viewedStatusesReducer;
