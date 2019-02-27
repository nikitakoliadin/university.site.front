import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory, Router} from 'react-router';

import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

serviceWorker.register();

const component = (
    <Provider store={store}>
        <BrowserRouter>
            <Router history={history}>
                {routes}
            </Router>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(component, document.getElementById('root'));
