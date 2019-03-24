import * as types from '../constants/actionTypes';

const initialState = {
    showTechnology: false,
    technology: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SELECT_TECHNOLOGY_TYPE: {
            return {
                ...state,
                technology: action.payload
            };
        }
        case types.OPEN_TECHNOLOGY_INFO_TYPE: {
            return {
                ...state,
                showTechnology: action.payload
            };
        }
        case types.CLOSE_TECHNOLOGY_INFO_TYPE: {
            return {
                ...state,
                showTechnology: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
