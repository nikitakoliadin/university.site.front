import React from 'react';
import {connect} from 'react-redux';

import Contacts from './Contacts';

const ContactsContainer = props => {
    const {contactsComponent} = props;
    return (
        <Contacts contactsComponent={contactsComponent}/>
    );
};

function mapStateToProps(state) {
    return {
        contactsComponent: state.contactsComponent
    };
}

export default connect(mapStateToProps)(ContactsContainer);
