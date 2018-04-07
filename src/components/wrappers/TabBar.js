import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, icons, borders } from '../../resources/constants.js'
import TabButton from '../buttons/TabButton.js';
import { withRouter } from "react-router-dom";

class TabBar extends Component {
    state = {
        activeTab: 'home'
    }

    handleClick = (type) => (event) => {
        // Change State
        this.setState({ activeTab: type })
        // Routing
        this.props.history.push(`/${type}`)

    }
    render() {
        return (
            <div style={styles.base}>
                <TabButton name="Home" isActive={this.state.activeTab === 'home'} type="home" onClick={this.handleClick('home')} />
                <TabButton name="Connections" isActive={this.state.activeTab === 'connections'} type="connections" onClick={this.handleClick('connections')} />
                <TabButton name="Jobs" isActive={this.state.activeTab === 'jobs'} type="jobs" onClick={this.handleClick('jobs')} />
                <TabButton name="Notifications" isActive={this.state.activeTab === 'notifications'} type="notifications" onClick={this.handleClick('notifications')} />
                <TabButton name="Articles" isActive={this.state.activeTab === 'articles'} type="articles" onClick={this.handleClick('articles')} />
                <TabButton name="Chat" isActive={this.state.activeTab === 'chat'} type="chat" onClick={this.handleClick('chat')} />
                <TabButton name="Profile" isActive={this.state.activeTab === 'profile'} type="profile" onClick={this.handleClick('profile')} />
            </div>
        )
    }
}

const styles = {
    base: {

    }
}


// Wrap it with Radium
TabBar = Radium(TabBar);
TabBar = withRouter(TabBar)

export default TabBar;
