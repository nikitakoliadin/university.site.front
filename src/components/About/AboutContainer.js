import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectTechnology, resetTechnology, openTechnology, closeTechnology} from '../../actions/technologyActions';
import About from './About';

const AboutContainer = props => {
    const {technologies, activeTechnology, activeLanguage} = props;
    const {selectTechnology, resetTechnology, openTechnology, closeTechnology} = props;
    return (
        <About technologies={technologies}
               activeTechnology={activeTechnology}
               activeLanguage={activeLanguage}
               selectTechnology={selectTechnology}
               resetTechnology={resetTechnology}
               openTechnology={openTechnology}
               closeTechnology={closeTechnology}
        />
    );
};

function mapStateToProps(state) {
    return {
        technologies: state.technologies,
        activeTechnology: state.activeTechnology,
        activeLanguage: state.activeLanguage
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectTechnology: selectTechnology,
        resetTechnology: resetTechnology,
        openTechnology: openTechnology,
        closeTechnology: closeTechnology
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
