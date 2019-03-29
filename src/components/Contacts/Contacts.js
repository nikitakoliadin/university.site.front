import React, {Component} from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import RadialMenu from 'react-radial-menu';

class Contacts extends Component {

    resize = throttle(() => {
        const {changeSize} = this.props;
        changeSize();
    }, 500);

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    render() {
        const {contacts} = this.props;
        return (
            <div className="Contacts">
                <div className="Text">
                    Thank you for paying attention to my site. All my contacts are listed below in the radial menu.
                </div>
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
    }
}

Contacts.propTypes = {
    contacts: PropTypes.object.isRequired,
    changeSize: PropTypes.func.isRequired
};

export default Contacts;
