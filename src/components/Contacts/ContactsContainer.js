import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {changeSize} from '../../actions/sizeActions';
import Contacts from './Contacts';

const ContactsContainer = props => {
    const {contacts, changeSize} = props;
    return (
        <Contacts contacts={contacts}
                  changeSize={changeSize}
        />
    );
};

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeSize: changeSize
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
