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
        return (
            <div style={[styles.base, styles[isSender ? 'right' : 'left']]}>
                <div className="single-message" style={[styles.message, styles[isSender ? '' : 'blueMessage']]}>
                    {message}
                </div>
            </div>
        );
    }
}

// Define the passed input types for this component
ChatMessage.propTypes = {
    message: PropTypes.object,
    isSender: PropTypes.bool
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
    },
    blueMessage: {
        background: colors.lightGray
    }
}

ChatMessage = Radium(ChatMessage);

export default ChatMessage;
