/**
    The ChatMessage component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, borders } from '../../resources/constants';

class ChatMessage extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { message, isSender } = this.props;
        console.log(message)
        return (
            <div style={[styles.base, styles[isSender ? 'right' : 'left']]}>
                <div className="single-message" style={[styles.message]}>
                    {message}
                </div>
            </div>
        );
    }
}

// Define the passed input types for this component
ChatMessage.propTypes = {
    message: PropTypes.object.isRequired,
    isSender: PropTypes.bool.isRequired
};

const styles = {
    base: {
        width: '100%',
        display: 'flex',
        padding: '10px'
    },
    left: {
        justifyContent: 'flex-start',
    },
    right: {
        justifyContent: 'flex-end',
    },
    message: {
        maxWidth: '50%',
        padding: '10px',
        background: colors.whiteGray,
        wordWrap: 'break-word',
        borderRadius: borders.button.radius.normal,
    }
}

ChatMessage = Radium(ChatMessage);

export default ChatMessage;
