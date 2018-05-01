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
    constructor(props) {
        super(props)

        if (props.match) {
            this.state.activeTab = props.location.pathname.substring(1)
        }
    }
    handleClick = (type) => (event) => {
        // Change State
        this.setState({ activeTab: type })
        // Routing
        this.props.history.push(`/${type}`)

    }
    render() {
        const { size } = this.props
        return (
            <div style={styles.base}>
                <TabButton name="Home" isActive={this.state.activeTab === 'home'} type="home" onClick={this.handleClick('home')} size={size} />
                <TabButton name="Connections" isActive={this.state.activeTab === 'connections'} type="connections" onClick={this.handleClick('connections')} size={size} />
                <TabButton name="Jobs" isActive={this.state.activeTab === 'jobs'} type="jobs" onClick={this.handleClick('jobs')} size={size} />
                <TabButton name="Notifications" isActive={this.state.activeTab === 'notifications'} type="notifications" onClick={this.handleClick('notifications')} size={size} />
                <TabButton name="Articles" isActive={this.state.activeTab === 'articles'} type="articles" onClick={this.handleClick('articles')} size={size} />
                <TabButton name="Chat" isActive={this.state.activeTab === 'chat'} type="chat" onClick={this.handleClick('chat')} size={size} />
                <TabButton name="Profile" isActive={this.state.activeTab === 'profile'} type="profile" onClick={this.handleClick('profile')} size={size} />
            </div>
        )
    }
}

const styles = {
    base: {
        flexShrink: 0,
        marginLeft: '50px'
    }
}

TabBar.propTypes = {
    size: PropTypes.oneOf(["sm", "md", "lg"]),
}

// Wrap it with Radium
TabBar = Radium(TabBar);
TabBar = withRouter(TabBar)

export default TabBar;
