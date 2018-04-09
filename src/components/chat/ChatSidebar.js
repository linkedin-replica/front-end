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
        const { chats } = this.props;
        return (
            <WhiteWrapper size="sm">
                <ListAdapter data={chats} listItemView={ChatSidebarItem} />
            </WhiteWrapper>
        );
    }
}

// Define the passed input types for this component
ChatSidebar.propTypes = {
    chats: PropTypes.array.isRequired
};

const styles = {
    base: {
    }
}

ChatSidebar = Radium(ChatSidebar);

export default ChatSidebar;
