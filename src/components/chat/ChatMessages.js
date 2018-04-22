/**
    The Chat component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors } from '../../resources/constants';
import ListAdapter from '../wrappers/ListAdapter';
import ChatMessage from './ChatMessage';

class ChatMessages extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { data } = this.props;
        return (
            <div style={styles.base}>
                <ListAdapter data={data} listItemView={ChatMessage} />
            </div>
        );
    }
}

// Define the passed input types for this component
ChatMessages.propTypes = {
    data: PropTypes.array.isRequired
};

const styles = {
    base: {
        height: '80%',
        overflowY: 'auto',
        overflowX: 'hidden'
    }
}

ChatMessages = Radium(ChatMessages);

export default ChatMessages;
