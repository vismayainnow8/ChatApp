import { TEXTINPUT } from './types';

export const setTextInput = (res) => {
    return {
        type: TEXTINPUT,
        data: res
    };
};
