import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {openMenu, closeMenu} from '../../actions/menuActions';
import Menu from './Menu';

const MenuContainer = props => {
    const {menu, openMenu, closeMenu} = props;
    return (
        <Menu menu={menu}
              openMenu={openMenu}
              closeMenu={closeMenu}
        />
    );
};

function mapStateToProps(state) {
    return {
        menu: state.menu
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        openMenu: openMenu,
        closeMenu: closeMenu
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
