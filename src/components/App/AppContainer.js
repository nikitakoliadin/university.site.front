import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

class AppContainer extends Component {

    getChildContext() {
        return {
            path: this.props.ownProps.location.pathname,
            refresh: () => this.forceUpdate()
        }
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Content>{this.props.children}</Content>
                <Footer/>
            </div>
        );
    }
}

AppContainer.propTypes = {
    children: PropTypes.element.isRequired
};

AppContainer.childContextTypes = {
    path: PropTypes.string.isRequired,
    refresh: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        ownProps: ownProps
    };
}

export default connect(mapStateToProps)(AppContainer);
