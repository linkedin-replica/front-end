/**
    The Chat component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors } from '../../resources/constants';

class ChatMessages extends Component {
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
ChatMessages.propTypes = {
    data: PropTypes.array.isRequired
};

const styles = {
    base: {
    }
}

ChatMessages = Radium(ChatMessages);

export default ChatMessages;
