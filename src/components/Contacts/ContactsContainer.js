import React from 'react';
import {connect} from 'react-redux';

import Contacts from './Contacts';

const ContactsContainer = props => {
    const {contacts} = props;
    return (
        <Contacts contacts={contacts}/>
    );
};

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    };
}

export default connect(mapStateToProps)(ContactsContainer);
