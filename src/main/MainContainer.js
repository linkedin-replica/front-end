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

class MainContainer extends Component {

    render() {
        const { match } = this.props
        return (
            <div className="main-container" style={styles.base}>
                <Route path='/login' component={RegistrationContainer} />
                <Route path='/home' component={WallContainer} />
                <Route path='/connections' component={ConnectionsContainer} />
                <Route path='/jobs' component={JobsContainer} />
                <Route path='/notifications' component={NotificationsContainer} />
                <Route path='/articles' component={ArticlesContainer} />
                <Route path='/chat' component={ChatContainer} />
                <Route path='/profile' component={ProfileContainer} />
                <Route path='/search-results' component={SearchResultsContainer} />
            </div>);
    }
}

const styles = {
    base: {
    }
}

MainContainer = Radium(MainContainer);
MainContainer = withRouter(MainContainer);
export default MainContainer;
