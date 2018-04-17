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
        const { } = this.props;
        return (
            <div style={styles.base}>
            </div>
        );
    }
}

// Define the passed input types for this component
AddChatMessage.propTypes = {
    data: PropTypes.object
};

const styles = {
    base: {
    }
}

AddChatMessage = Radium(AddChatMessage);

export default AddChatMessage;
