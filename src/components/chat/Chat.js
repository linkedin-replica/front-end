/**
    The Chat component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors } from '../../resources/constants';
import ChatSidebar from './ChatSidebar';
import ChatDetails from './ChatDetails';

class Chat extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { chats, chatDetails, onSelectChat } = this.props;
        return (
            <section style={styles.base}>
                <ChatSidebar chats={chats} onSelectChat={onSelectChat} />
                <ChatDetails chatDetails={chatDetails} />
            </section>
        );
    }
}

// Define the passed input types for this component
Chat.propTypes = {
    data: PropTypes.object
};

const styles = {
    base: {
    }
}

Chat = Radium(Chat);

export default Chat;
