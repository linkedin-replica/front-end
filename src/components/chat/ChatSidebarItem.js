/**
    The ChatSidebar component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import DetailsHeader from '../details/DetailsHeader';

class ChatSidebarItem extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { img, name, miniText } = this.props;
        return (
            <DetailsHeader imgSrc={img} boldText={name} grayText={miniText} style={styles.base} rounded />
        );
    }
}

// Define the passed input types for this component
ChatSidebarItem.propTypes = {
    img: PropTypes.instanceOf(Image),
    name: PropTypes.string.isRequired,
    miniText: PropTypes.string
};

const styles = {
    base: {
        padding: '15px'
    }
}

ChatSidebarItem = Radium(ChatSidebarItem);

export default ChatSidebarItem;
