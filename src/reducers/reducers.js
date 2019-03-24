import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import menuReducer from './menuReducer';
import technologiesReducer from './technologiesReducer';
import contactsReducer from './contactsReducer';

const reducers = combineReducers({
    routing: routerReducer,
    menu: menuReducer,
    technologies: technologiesReducer,
    contacts: contactsReducer
});

export default reducers;
