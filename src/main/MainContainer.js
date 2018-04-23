import React, { Component } from 'react';
import Radium from 'radium';
import { Route, withRouter } from 'react-router-dom';
import WallContainer from './WallContainer';
import ConnectionsContainer from './ConnectionsContainer';
import JobsContainer from './JobsContainer';
import JobContainer from './JobContainer';
import NotificationsContainer from './NotificationsContainer';
import ArticlesContainer from './ArticlesContainer';
import ArticleContainer from './ArticleContainer';
import CompanyContainer from './CompanyContainer';
import ChatContainer from './ChatContainer';
import ProfileContainer from './ProfileContainer';
import SearchResultsContainer from './SearchResultsContainer';
import RegistrationContainer from './RegistrationContainer';
import Header from '../components/wrappers/Header';
import ProfileTest from '../tests/ProfileTest';

class MainContainer extends Component {

    render() {
        const { match } = this.props
        return (
            <div className="main-app" style={styles.base}>
                <Header isLoggedIn />
                <main className="main-details" style={styles.details}>
                    <Route path='/home' component={WallContainer} />
                    <Route path='/connections' component={ConnectionsContainer} />
                    <Route path='/jobs' component={JobsContainer} />
                    <Route path='/notifications' component={NotificationsContainer} />
                    <Route path='/articles' component={ArticlesContainer} />
                    <Route path='/chat' component={ChatContainer} />
                    <Route path='/profile/:id' component={ProfileContainer} />
                    <Route path='/company/:id' component={CompanyContainer} />
                    <Route path='/job/:id' component={JobContainer} />
                    <Route path='/article/:id' component={ArticleContainer} />
                    <Route path='/search-results' component={SearchResultsContainer} />
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

MainContainer = Radium(MainContainer);
MainContainer = withRouter(MainContainer);
export default MainContainer;
