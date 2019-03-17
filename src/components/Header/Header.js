import React from 'react';

import MenuContainer from '../Menu/MenuContainer';

const Header = () => (
    <div className="Header">
        <MenuContainer/>
        <div className="Logo">
            <img className="Image" src="./image/header.gif" align="left" alt="gif"/>
            <span className="Text">
				University App
			</span>
            <img className="Image" src="./image/header.gif" align="right" alt="gif"/>
        </div>
    </div>
);

export default Header;
