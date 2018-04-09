/**
    The ChatMessage component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors } from '../../resources/constants';

class ChatMessage extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { } = this.props;
        return (
            <div>
            </div>
        );
    }
}

// Define the passed input types for this component
ChatMessage.propTypes = {
    data: PropTypes.object
};

const styles = {
    base: {
    }
}

ChatMessage = Radium(ChatMessage);

export default ChatMessage;
