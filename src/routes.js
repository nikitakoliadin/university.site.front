import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import AppContainer from './components/App/AppContainer';
import Main from './components/Main/Main';
import AboutContainer from './components/About/AboutContainer';
import ContactsContainer from './components/Contacts/ContactsContainer';

export default (
    <Route path="/" component={AppContainer}>
        <IndexRedirect to="main"/>
        <Route path="/main" component={Main}/>
        <Route path="/about" component={AboutContainer}/>
        <Route path="/contacts" component={ContactsContainer}/>
        <Route path="*" component={Main}/>
    </Route>
);
