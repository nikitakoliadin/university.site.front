import React from 'react';
import {Link} from 'react-router';

const Menu = () => (
    <div>
        <Link to="/about">
            <b>&nbsp;</b>
            About
        </Link>
        <Link to="/main">
            <b>&nbsp;</b>
            Main
        </Link>
    </div>
);

export default Menu;
