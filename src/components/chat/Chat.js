/**
    The Chat component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import ChatSidebar from './ChatSidebar';
import ChatDetails from './ChatDetails';

class Chat extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { chats,
            chatDetails,
            receiverName,
            inputMessageVal,
            handleSendMessage,
            handleSelectChat,
            handleChange } = this.props;

        return (
            <section style={styles.base}>
                <ChatSidebar chats={chats}
                    handleSelectChat={handleSelectChat}
                    style={styles.sidebar} />
                <ChatDetails data={chatDetails}
                    receiverName={receiverName}
                    inputMessageVal={inputMessageVal}
                    handleSendMessage={handleSendMessage}
                    handleChange={handleChange}
                    style={styles.details} />
            </section>
        );
    }
}

// Define the passed input types for this component
Chat.propTypes = {
    chats: PropTypes.array.isRequired,
    chatDetails: PropTypes.array.isRequired,
    receiverName: PropTypes.string,
    inputMessageVal: PropTypes.string.isRequired,
    handleSendMessage: PropTypes.func.isRequired,
    handleSelectChat: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

const styles = {
    base: {
        display: 'flex',
        height: '100vh'
    },
    sidebar: {
        borderRight: 0
    },
    details: {
        borderLeft: 0
    }
}

Chat = Radium(Chat);

export default Chat;
