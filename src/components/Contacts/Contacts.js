import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RadialMenu from 'react-radial-menu';

class Contacts extends Component {

    resize = () => {
        const {changeSize} = this.props;
        changeSize();
    };

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
