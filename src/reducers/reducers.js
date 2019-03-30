import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import menuReducer from './menuReducer';
import technologiesReducer from './technologiesReducer';
import activeTechnologyReducer from './activeTechnologyReducer.js';
import contactsReducer from './contactsReducer';
import stylesReducer from './stylesReducer'

const reducers = combineReducers({
    routing: routerReducer,
    menu: menuReducer,
    technologies: technologiesReducer,
    activeTechnology: activeTechnologyReducer,
    contacts: contactsReducer,
    styles: stylesReducer
});

export default reducers;
