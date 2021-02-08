import { SEARCHBARVISIBLE } from '../Actions/types';


const initialState = {
        searchBarVisible: false
};

const searchBarVisibleReducer = (state = initialState, action) => {
        switch (action.type) {
                case SEARCHBARVISIBLE:
                        return { ...state, searchBarVisible: action.data };
                default:
                        return state;
        }
};

export default searchBarVisibleReducer;
