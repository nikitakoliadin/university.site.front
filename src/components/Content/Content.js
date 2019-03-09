import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu/Menu';

const Content = props => (
    <div className="Content">
        <Menu/>
        {props.children}
    </div>
);

Content.propTypes = {
    children: PropTypes.element.isRequired
};

export default Content;
