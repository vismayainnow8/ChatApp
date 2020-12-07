import { TEXTINPUT } from '../Actions/types';

const initialState = {
    textInput: null
};

const setTextInput = (state = initialState, action) => {
    switch (action.type) {
        case TEXTINPUT:
            return { ...state, textInput: action.data };
        default:
            return state;
    }
};

export default setTextInput;
