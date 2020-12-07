import { SET_SEARCHPRESSED, TABSTATE } from '../Actions/types';

const initialState = {
        tabState: "Camera"
};

const SearchPressedReducer = (state = initialState, action) => {
        switch (action.type) {
                case SET_SEARCHPRESSED:
                        return { ...state, searchPressed: action.data }
                case TABSTATE:
                        return { ...state, tabState: action.data }
                default:
                        return state;
        }
};
// const tabState = (state = initialState, action) => {
//         switch (action.type) {
//                 case TABSTATE:
//                         return { ...state, history: action.data }
//                 default:
//                         return state;
//         }
// };

export default SearchPressedReducer;
// export default tabState;











