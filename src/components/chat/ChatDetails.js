/**
    The Chat component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { colors } from '../../resources/constants';
import ChatMessages from './ChatMessages';
import AddChatMessage from './AddChatMessage';
import WhiteWrapper from '../wrappers/WhiteWrapper';

class ChatDetails extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { data, inputMessageVal, handleSendMessage, handleChange, style } = this.props;
        return (
            <WhiteWrapper style={[styles.base, style]}>
                <ChatMessages key="ChatMessages" data={data} />
                <AddChatMessage
                    inputMessageVal={inputMessageVal}
                    handleSendMessage={handleSendMessage}
                    handleChange={handleChange} />
            </WhiteWrapper>
        );
    }
}

// Define the passed input types for this component
ChatDetails.propTypes = {
    data: PropTypes.array.isRequired,
    inputMessageVal: PropTypes.string.isRequired,
    handleSendMessage: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    style: PropTypes.object
};

const styles = {
    base: {
        height: '100%',
    }
}

ChatDetails = Radium(ChatDetails);

export default ChatDetails;
