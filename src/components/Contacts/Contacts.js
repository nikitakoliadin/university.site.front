import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RadialMenu from 'react-radial-menu';

class Contacts extends Component {

    componentDidMount() {
        const {changeSize} = this.props;
        window.addEventListener('resize', () => changeSize());
    }

    componentWillUnmount() {
        const {changeSize} = this.props;
        window.removeEventListener('resize', () => changeSize());
    }

    render() {
        const {contacts} = this.props;
        return (
            <div className="Contacts">
                <RadialMenu
                    center={contacts.radialMenu.center}
                    items={contacts.radialMenu.items}
                    duration={contacts.radialMenu.duration}
                    stagger={contacts.radialMenu.stagger}
                    itemsSize={contacts.radialMenu.itemsSize}
                    distance={contacts.radialMenu.distance}
                />
            </div>
        );
    }
}

Contacts.propTypes = {
    contacts: PropTypes.object.isRequired,
    changeSize: PropTypes.func.isRequired
};

export default Contacts;
