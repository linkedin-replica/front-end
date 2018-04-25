/**
 Testing the details header component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import FriendRequests from '../components/connections/FriendRequests';
import FriendRecommendationItem from '../components/connections/FriendRecommendationItem';
import FriendRecommendations from '../components/connections/FriendRecommendations';
import WhiteWrapper from '../components/wrappers/WhiteWrapper';

class ConnectionsTest extends Component {

    render() {
        return (
            <div style={styles.base}>
                <header>
                    <h1>Connections Testing</h1>
                </header>
                <section>
                    <h2>Friend Requests List</h2>
                    <FriendRequests/>
                </section>
                
                <section>
                <h2>Friend Recommendation List</h2>
                    <FriendRecommendations/>
                </section>
            </div >
        );
    }
}

const styles = {
    base: {
        padding: '10px',
    }
}

ConnectionsTest = Radium(ConnectionsTest);
export default ConnectionsTest;
