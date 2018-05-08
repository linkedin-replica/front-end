/**
 Testing the details header component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import Notification from '../components/notifications/Notification';
import Notifications from '../components/notifications/Notifications';

class NotificationsTest extends Component {

    render() {
        return (
            <div style={styles.base}>
                <header>
                    <h1>Notifications Testing</h1>
                </header>
                <section>
                    <h2>Notification Item</h2>
                    <Notification
                        text="Esso Salah liked your post"
                        link="a7la esso deh walla eh?"
                        timestamp= "1293"
                    />
                </section>
                <section>
                <h2>Notifications List</h2>
                    <Notifications/>
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

NotificationsTest = Radium(NotificationsTest);
export default NotificationsTest;
