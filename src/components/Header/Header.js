import React from 'react';

import localization from '../../localization/localization';
import MenuContainer from '../Menu/MenuContainer';
import LanguageContainer from '../Language/LanguageContainer';

const Header = () => (
    <div className="Header">
        <div className="Buttons">
            <MenuContainer/>
            <LanguageContainer/>
        </div>
        <div className="Logo">
            <img className="Image"
                 src={`${process.env.PUBLIC_URL}/image/header.gif`}
                 align="left"
                 alt="gif"/>
            <span className="Text">
                {localization.header1}
			</span>
            <img className="Image"
                 src={`${process.env.PUBLIC_URL}/image/header.gif`}
                 align="right"
                 alt="gif"/>
        </div>
    </div>
);

export default Header;
