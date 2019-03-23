import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import menuReducer from './menuReducer';
import contactsReducer from './contactsReducer';

const reducers = combineReducers({
    routing: routerReducer,
    menu: menuReducer,
    contacts: contactsReducer
});

export default reducers;
