import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Add';

class About extends Component {

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
                <hr/>
                <div className="Content">
                    <div className="Text">
                        {activeTechnology.technology.description}
                    </div>
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
                <hr/>
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
                <div className="HeadText">
                    This application is based on React.js and Redux.js. See description below.
                </div>
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
    selectTechnology: PropTypes.func.isRequired,
    resetTechnology: PropTypes.func.isRequired,
    openTechnology: PropTypes.func.isRequired,
    closeTechnology: PropTypes.func.isRequired
};

export default About;
