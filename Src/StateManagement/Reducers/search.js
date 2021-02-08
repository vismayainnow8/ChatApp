import { SEARCH } from '../Actions/types';


const initialState = {
        search: null
};

const searchReducer = (state = initialState, action) => {
        switch (action.type) {
                case SEARCH:
                        return { ...state, search: action.data };
                default:
                        return state;
        }
};


export default searchReducer;
