import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import menuReducer from './menuReducer';
import technologiesReducer from './technologiesReducer';
import activeTechnologyReducer from './activeTechnologyReducer.js';
import contactsComponentReducer from './contactsComponentReducer';
import stylesReducer from './stylesReducer';
import menuComponentReducer from './menuComponentReducer';

const reducers = combineReducers({
    routing: routerReducer,
    menu: menuReducer,
    technologies: technologiesReducer,
    activeTechnology: activeTechnologyReducer,
    contactsComponent: contactsComponentReducer,
    styles: stylesReducer,
    menuComponent: menuComponentReducer
});

export default reducers;
