import React from 'react';
import PropTypes from 'prop-types';
import RadialMenu from 'react-radial-menu';

const Contacts = props => {
    const {contacts} = props;
    return (
        <div className="Contacts">
                <span className="Text">
                    Thank you for paying attention to my site. All my contacts are listed below in the radial menu.
                </span>
            <div className="RadialMenu">
                <RadialMenu
                    center={contacts.radialMenu.center}
                    items={contacts.radialMenu.items}
                    duration={contacts.radialMenu.duration}
                    stagger={contacts.radialMenu.stagger}
                    itemsSize={contacts.radialMenu.itemsSize}
                    distance={contacts.radialMenu.distance}
                />
            </div>
        </div>
    );
};

Contacts.propTypes = {
    contacts: PropTypes.object.isRequired,
};

export default Contacts;
