import React from 'react';

import Menu from '../Menu/Menu';

const Header = () => (
    <div className="Header">
        <div className="Menu">
            <Menu/>
        </div>
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
