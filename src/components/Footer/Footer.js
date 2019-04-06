import React from 'react';

import localization from '../../localization/localization';

const Footer = () => (
    <div className="Footer">
        <span className="Text">
            {localization.footer1}
        </span>
        <span className="Text">
            {localization.footer2}
        </span>
    </div>
);

export default Footer;
