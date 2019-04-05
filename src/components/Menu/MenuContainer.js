import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {openMenu, closeMenu} from '../../actions/menuActions';
import Menu from './Menu';

const MenuContainer = props => {
    const {menu, menuComponent} = props;
    const {openMenu, closeMenu} = props;
    return (
        <Menu menu={menu}
              menuComponent={menuComponent}
              openMenu={openMenu}
              closeMenu={closeMenu}
        />
    );
};

function mapStateToProps(state) {
    return {
        menu: state.menu,
        menuComponent: state.menuComponent
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        openMenu: openMenu,
        closeMenu: closeMenu
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
