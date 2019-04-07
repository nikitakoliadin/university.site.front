import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import stylesReducer from './stylesReducer';
import menuReducer from './menuReducer';
import menuComponentReducer from './menuComponentReducer';
import languagesReducer from './languagesReducer';
import activeLanguageReducer from './activeLanguageReducer';
import technologiesReducer from './technologiesReducer';
import activeTechnologyReducer from './activeTechnologyReducer.js';
import contactsComponentReducer from './contactsComponentReducer';

const reducers = combineReducers({
    routing: routerReducer,
    styles: stylesReducer,
    menu: menuReducer,
    menuComponent: menuComponentReducer,
    languages: languagesReducer,
    activeLanguage: activeLanguageReducer,
    technologies: technologiesReducer,
    activeTechnology: activeTechnologyReducer,
    contactsComponent: contactsComponentReducer
});

export default reducers;
