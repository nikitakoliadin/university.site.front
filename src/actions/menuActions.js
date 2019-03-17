import * as types from '../constants/actionTypes';

export const openMenu = () => {
    return {
        type: types.OPEN_MENU_TYPE,
        payload: true
    };
};

export const closeMenu = () => {
    return {
        type: types.CLOSE_MENU_TYPE,
        payload: false
    };
};
