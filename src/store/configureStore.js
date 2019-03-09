import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers/reducers';

const configureStore = () => {
    const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, logger)));
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
