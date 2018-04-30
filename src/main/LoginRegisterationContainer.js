import React, { Component } from 'react';
import Radium from 'radium';
import { Route, withRouter } from 'react-router-dom';
import WallContainer from './WallContainer';
import ConnectionsContainer from './ConnectionsContainer';
import JobsContainer from './JobsContainer';
import NotificationsContainer from './NotificationsContainer';
import ArticlesContainer from './ArticlesContainer';
import ChatContainer from './ChatContainer';
import ProfileContainer from './ProfileContainer';
import SearchResultsContainer from './SearchResultsContainer';
import RegistrationContainer from './RegistrationContainer';
import Header from '../components/wrappers/Header';

class LoginRegisterationContainer extends Component {

    render() {
        const { match } = this.props
        return (
            <div className="main-app" style={styles.base}>
                <Header />
                <main className="main-details" style={styles.details}>
                    <RegistrationContainer />
                </main>
            </div>);
    }
}

const styles = {
    details: {
        padding: '80px 30px',
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
    }
}

LoginRegisterationContainer = Radium(LoginRegisterationContainer);
export default LoginRegisterationContainer;
