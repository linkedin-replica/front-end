/**
 Testing the details header component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import FriendRequestItem from '../components/connections/FriendRequestItem';


class ConnectionsTest extends Component {

    render() {
        return (
            <div style={styles.base}>
                <header>
                    <h1>Connections Testing</h1>
                </header>
                <section>
                    <h2>Friend Request Item</h2>
                    <FriendRequestItem
                        name="Esso Salah"
                        description="a7la esso deh walla eh?"
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A"
                        id="1"
                    />
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
