import React, {Component} from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {changeSize} from '../../actions/sizeActions';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

class AppContainer extends Component {

    resize = throttle(() => {
        const {changeSize} = this.props;
        changeSize();
    }, 500);

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    getChildContext() {
        return {
            path: this.props.ownProps.location.pathname,
            refresh: () => this.forceUpdate()
        }
    }

    render() {
        const {styles} = this.props;
        return (
            <div className="App"
                 style={styles.lastWayStyle}>
                <Header/>
                <Content>
                    {this.props.children}
                </Content>
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
        ownProps: ownProps,
        styles: state.styles
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changeSize: changeSize
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
