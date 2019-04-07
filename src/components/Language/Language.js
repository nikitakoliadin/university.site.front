import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';

class Language extends Component {

    showListOfLanguages() {
        const {languages, activeLanguage} = this.props;
        const {selectLanguage} = this.props;
        return languages.map((language) => {
            return (
                <Fab key={language.id}
                     className="Button"
                     size="small"
                     disabled={language.id === activeLanguage.language.id}
                     onClick={() => selectLanguage(language)}>
                    {language.name}
                </Fab>
            );
        });
    }

    render() {
        return (
            <div className="Language">
                {this.showListOfLanguages()}
            </div>
        );
    }
}

Language.propTypes = {
    languages: PropTypes.array.isRequired,
    activeLanguage: PropTypes.object.isRequired,
    selectLanguage: PropTypes.func.isRequired
};

export default Language;
