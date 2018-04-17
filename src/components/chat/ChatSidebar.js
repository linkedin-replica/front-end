/**
    The ChatSidebar component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors } from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import ListAdapter from '../wrappers/ListAdapter';
import ChatSidebarItem from './ChatSidebarItem';

class ChatSidebar extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { chats, handleSelectChat, style } = this.props;

        chats.map(chat => {
            return { ...chat, handleSelectChat }
        })
        return (
            <WhiteWrapper size="sm" style={[styles.base, style]}>
                <ListAdapter data={chats} listItemView={ChatSidebarItem} size="sm" />
            </WhiteWrapper>
        );
    }
}

// Define the passed input types for this component
ChatSidebar.propTypes = {
    chats: PropTypes.array.isRequired,
    handleSelectChat: PropTypes.func.isRequired,
    style: PropTypes.object
};

const styles = {
    base: {
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
    }
}

ChatSidebar = Radium(ChatSidebar);

export default ChatSidebar;
