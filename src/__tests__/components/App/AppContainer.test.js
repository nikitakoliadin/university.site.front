import React from 'react';
import {shallow} from 'enzyme';

import AppContainer from '../../../components/App/AppContainer';
import Main from '../../../components/Main/Main';

it("renders without crashing", () => {
    shallow(<AppContainer><Main/></AppContainer>);
});
