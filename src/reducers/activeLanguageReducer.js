import * as types from '../constants/actionTypes';

const initialState = {
    language: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SELECT_DEFAULT_LANGUAGE_TYPE: {
            return {
                ...state,
                language: action.payload
            };
        }
        case types.SELECT_LANGUAGE_TYPE: {
            return {
                ...state,
                language: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
