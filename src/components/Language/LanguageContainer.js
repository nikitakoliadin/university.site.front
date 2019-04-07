import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectLanguage} from '../../actions/languageActions';
import Language from './Language';

const LanguageContainer = props => {
    const {languages, activeLanguage} = props;
    const {selectLanguage} = props;
    return (
        <Language languages={languages}
                  activeLanguage={activeLanguage}
                  selectLanguage={selectLanguage}/>
    );
};

function mapStateToProps(state) {
    return {
        languages: state.languages,
        activeLanguage: state.activeLanguage
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectLanguage: selectLanguage
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageContainer);
