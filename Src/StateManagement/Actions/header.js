import { TABSTATE, SET_SEARCHPRESSED } from './types';

export const setChatSearchPressed = (res) => {
        return {
                type: SET_SEARCHPRESSED,
                data: res,
        };
};
export const setTabstate = (res) => {
        return {
                type: TABSTATE,
                data: res,
        };
};
