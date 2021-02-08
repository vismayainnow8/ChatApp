import { SEARCH } from './types';

export const search = (res) => {
        return {
                type: SEARCH,
                data: res,
        };
};

