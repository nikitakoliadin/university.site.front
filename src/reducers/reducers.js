import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import menuReducer from './menuReducer';

const reducers = combineReducers({
    routing: routerReducer,
    menu: menuReducer
});

export default reducers;
