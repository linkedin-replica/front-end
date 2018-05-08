/**
    The ChatSidebar component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import DetailsHeader from '../details/DetailsHeader';
import BlackText from '../typography/BlackText';
import AvatarImage from '../images/AvatarImage';

class ChatSidebarItem extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { userId, profilePictureUrl, firstName, lastName, handleSelectChat, isSelected } = this.props;
        return (
            <div style={[styles.base, isSelected ? styles.isSelected : styles.notSelected]}
                onClick={() => handleSelectChat(userId, firstName + ' ' + lastName)} >
                <AvatarImage src={profilePictureUrl}
                    rounded
                />
                <BlackText text={firstName + ' ' + lastName} style={styles.text} />
            </div>
        );
    }
}

// Define the passed input types for this component
ChatSidebarItem.propTypes = {
    userId: PropTypes.string,
    profilePictureUrl: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    handleSelectChat: PropTypes.func,
    isSelected: PropTypes.bool
};

const styles = {
    base: {
        padding: '15px',
        cursor: 'pointer',
        display: 'flex',
        ':hover': {
            background: colors.whiteGray
        },
        ':active': {
            opacity: '0.8'
        },
    },
    text: {
        marginLeft: '10px',
        fontWeight: '600'
    },
    notSelected: {
        background: 'initial'
    },
    isSelected: {
        background: colors.lightGray
    }
}

ChatSidebarItem = Radium(ChatSidebarItem);

export default ChatSidebarItem;
