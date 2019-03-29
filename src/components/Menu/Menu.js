import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import HamburgerMenu from 'react-hamburger-menu';
import CheeseburgerMenu from 'cheeseburger-menu';

const Menu = props => {
    const {menu} = props;
    const {openMenu, closeMenu} = props;
    return (
        <div className="Menu">
            <HamburgerMenu
                isOpen={menu.showMenu}
                menuClicked={() => openMenu()}
                width={32}
                height={24}
                strokeWidth={3}
                rotate={0}
                color="black"
                borderRadius={0}
                animationDuration={0.5}
            />
            <CheeseburgerMenu
                isOpen={menu.showMenu}
                closeCallback={() => closeMenu()}>
                <div className="List">
                    <div className="Item">
                        <Link to="/main"
                              onClick={() => closeMenu()}>
                            Main
                        </Link>
                    </div>
                    <div className="Item">
                        <Link to="/about"
                              onClick={() => closeMenu()}>
                            About
                        </Link>
                    </div>
                    <div className="Item">
                        <Link to="/contacts"
                              onClick={() => closeMenu()}>
                            Contacts
                        </Link>
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
    openMenu: PropTypes.func.isRequired,
    closeMenu: PropTypes.func.isRequired
};

export default Menu;
