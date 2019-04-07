import * as types from '../constants/actionTypes';
import localization from '../localization/localization';

export const selectDefaultLanguage = (language) => {
    localization.setLanguage(language.name);
    return {
        type: types.SELECT_DEFAULT_LANGUAGE_TYPE,
        payload: language
    };
};

export const selectLanguage = (language) => {
    localization.setLanguage(language.name);
    return {
        type: types.SELECT_LANGUAGE_TYPE,
        payload: language
    };
};
