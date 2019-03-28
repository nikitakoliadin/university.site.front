import * as types from '../constants/actionTypes';

export const selectTechnology = (technology) => {
    return {
        type: types.SELECT_TECHNOLOGY_TYPE,
        payload: technology
    };
};

export const resetTechnology = () => {
    return {
        type: types.RESET_TECHNOLOGY_TYPE,
        payload: {}
    };
};

export const openTechnology = () => {
    return {
        type: types.OPEN_TECHNOLOGY_INFO_TYPE,
        payload: true
    };
};

export const closeTechnology = () => {
    return {
        type: types.CLOSE_TECHNOLOGY_INFO_TYPE,
        payload: false
    };
};
