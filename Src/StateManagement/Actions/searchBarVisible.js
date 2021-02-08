import { SEARCHBARVISIBLE } from './types';

export const searchBarVisible = (res) => {
        return {
                type: SEARCHBARVISIBLE,
                data: res,
        };
};

