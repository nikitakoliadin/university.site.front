import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import throttle from 'lodash.throttle';

import {loadState, saveState} from './localStorage';
import reducers from '../reducers/reducers';

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(reducers, persistedState, composeWithDevTools(applyMiddleware(thunk, logger)));
    store.subscribe(throttle(() => {
        saveState({
            activeLanguage: store.getState().activeLanguage
        });
    }, 1000));
    if (process.env.NODE_ENV !== "production") {
        if (module.hot) {
            module.hot.accept("../reducers/reducers", () => {
                store.replaceReducer(reducers);
            });
        }
    }
    return store;
};

export default configureStore;
