import React from 'react';
import PropTypes from 'prop-types';
import RadialMenu from 'react-radial-menu';

const Contacts = props => {
    const {contactsComponent} = props;
    return (
        <div className="Contacts">
                <span className="Text">
                    Thank you for paying attention to my site. All my contacts are listed below in the radial menu.
                </span>
            <div className="RadialMenu">
                <RadialMenu
                    center={contactsComponent.radialMenu.center}
                    items={contactsComponent.radialMenu.items}
                    duration={contactsComponent.radialMenu.duration}
                    stagger={contactsComponent.radialMenu.stagger}
                    itemsSize={contactsComponent.radialMenu.itemsSize}
                    distance={contactsComponent.radialMenu.distance}
                />
            </div>
        </div>
    );
};

Contacts.propTypes = {
    contactsComponent: PropTypes.object.isRequired,
};

export default Contacts;
