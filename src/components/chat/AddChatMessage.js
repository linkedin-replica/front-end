/**
    The Chat component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors } from '../../resources/constants';
import WhiteWrapper from '../wrappers/WhiteWrapper';

class AddChatMessage extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { inputMessageVal, handleSendMessage, handleChange } = this.props;
        return (
            <div style={styles.base}>
                <textarea id="add-msg"
                    placeholder="Write a message"
                    onKeyUp={handleSendMessage}
                    onChange={handleChange}
                    value={inputMessageVal}
                    maxLength={300}
                    style={styles.input}
                />
            </div>
        );
    }
}

// Define the passed input types for this component
AddChatMessage.propTypes = {
    inputMessageVal: PropTypes.string.isRequired,
    handleSendMessage: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

const styles = {
    base: {
        width: '100%',
        height: '20%'
    },
    input: {
        width: '100%',
        height: '100%',
        resize: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        borderBottom: 'none',
        borderTopColor: colors.darkBlue,
        padding: '10px',
        outline: 'none'
    }
}

AddChatMessage = Radium(AddChatMessage);

export default AddChatMessage;
