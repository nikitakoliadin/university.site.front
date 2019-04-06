import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import HamburgerMenu from 'react-hamburger-menu';
import CheeseburgerMenu from 'cheeseburger-menu';

import localization from '../../localization/localization';

const Menu = props => {
    const {menu, menuComponent} = props;
    const {openMenu, closeMenu} = props;
    return (
        <div className="Menu">
            <HamburgerMenu
                isOpen={menu.showMenu}
                menuClicked={() => openMenu()}
                width={menuComponent.hamburgerMenu.width}
                height={menuComponent.hamburgerMenu.height}
                strokeWidth={menuComponent.hamburgerMenu.strokeWidth}
                rotate={menuComponent.hamburgerMenu.rotate}
                color={menuComponent.hamburgerMenu.color}
                borderRadius={menuComponent.hamburgerMenu.borderRadius}
                animationDuration={menuComponent.hamburgerMenu.animationDuration}
            />
            <CheeseburgerMenu
                isOpen={menu.showMenu}
                closeCallback={() => closeMenu()}
                backgroundColor={menuComponent.cheeseburgerMenu.backgroundColor}>
                <div className="List">
                    <div className="Items">
                        <div className="Item">
                            <Link to="/main"
                                  onClick={() => closeMenu()}>
                                {localization.menu1}
                            </Link>
                        </div>
                        <div className="Item">
                            <Link to="/about"
                                  onClick={() => closeMenu()}>
                                {localization.menu2}
                            </Link>
                        </div>
                        <div className="Item">
                            <Link to="/contacts"
                                  onClick={() => closeMenu()}>
                                {localization.menu3}
                            </Link>
                        </div>
                    </div>
                    <div className="Logo">
                        <img className="Image"
                             src={`${process.env.PUBLIC_URL}/image/header.gif`}
                             alt="gif"/>
                    </div>
                </div>
            </CheeseburgerMenu>
        </div>
    );
};

Menu.propTypes = {
    menu: PropTypes.object.isRequired,
    menuComponent: PropTypes.object.isRequired,
    openMenu: PropTypes.func.isRequired,
    closeMenu: PropTypes.func.isRequired
};

export default Menu;
