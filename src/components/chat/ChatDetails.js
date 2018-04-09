/**
    The Chat component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors } from '../../resources/constants';

class ChatDetails extends Component {
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
ChatDetails.propTypes = {
    data: PropTypes.object
};

const styles = {
    base: {
    }
}

ChatDetails = Radium(ChatDetails);

export default ChatDetails;
