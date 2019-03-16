import React from 'react';
import PropTypes from 'prop-types';

const Content = props => (
    <div className="Content">
        {props.children}
    </div>
);

Content.propTypes = {
    children: PropTypes.element.isRequired
};

export default Content;
