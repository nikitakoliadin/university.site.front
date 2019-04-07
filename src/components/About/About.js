import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Add';

import localization from '../../localization/localization';

class About extends Component {

    componentWillUpdate(nextProps, nextState, nextContext) {
        const {activeLanguage, activeTechnology} = this.props;
        const {selectTechnology} = this.props;
        if (nextProps.activeLanguage.language.id !== activeLanguage.language.id) {
            const updatedTechnology = nextProps.technologies[activeTechnology.technology.id - 1];
            selectTechnology(updatedTechnology);
        }
    }

    showListOfTechnologies() {
        const {technologies} = this.props;
        const {selectTechnology, openTechnology} = this.props;
        return technologies.map((technology) => {
            return (
                <Button key={technology.id}
                        variant="contained"
                        className="Button"
                        onClick={() => {
                            selectTechnology(technology);
                            openTechnology();
                        }}>
                    {technology.name}
                </Button>
            );
        });
    }

    showDescription() {
        const {activeTechnology} = this.props;
        const {closeTechnology, resetTechnology} = this.props;
        return (
            <div className="Description">
                <hr className="Line"/>
                <div className="Content">
                    <span className="Text">
                        {activeTechnology.technology.description}
                    </span>
                    <div className="CloseButton">
                        <Fab aria-label="Add"
                             onClick={() => {
                                 closeTechnology();
                                 resetTechnology();
                             }}>
                            <CloseIcon className="CloseLabel"/>
                        </Fab>
                    </div>
                </div>
                <hr className="Line"/>
                <div className="Logo">
                    <img src={activeTechnology.technology.imageSrc}
                         className="Image"
                         alt="logo"/>
                </div>
            </div>
        );
    }

    render() {
        const {activeTechnology} = this.props;
        return (
            <div className="About">
                <span className="HeadText">
                    {localization.about1}
                </span>
                <div className="SelectButtons">
                    {this.showListOfTechnologies()}
                </div>
                {activeTechnology.showTechnology && this.showDescription()}
            </div>
        );
    }
}

About.propTypes = {
    technologies: PropTypes.array.isRequired,
    activeTechnology: PropTypes.object.isRequired,
    activeLanguage: PropTypes.object.isRequired,
    selectTechnology: PropTypes.func.isRequired,
    resetTechnology: PropTypes.func.isRequired,
    openTechnology: PropTypes.func.isRequired,
    closeTechnology: PropTypes.func.isRequired
};

export default About;
