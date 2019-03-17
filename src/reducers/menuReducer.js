import * as types from '../constants/actionTypes';

const initialState = {
    showMenu: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.OPEN_MENU_TYPE: {
            return {
                ...state,
                showMenu: action.payload
            };
        }
        case types.CLOSE_MENU_TYPE: {
            return {
                ...state,
                showMenu: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
