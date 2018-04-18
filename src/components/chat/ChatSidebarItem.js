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
        const { img, name, miniText, handleSelectChat, isSelected } = this.props;
        return (
            <div style={[styles.base, isSelected ? styles.isSelected : styles.notSelected]}
                onClick={() => handleSelectChat(2)} >
                <DetailsHeader img={img}
                    rounded
                    header={name}
                    subHeader={miniText} />
            </div>
        );
    }
}

// Define the passed input types for this component
ChatSidebarItem.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    miniText: PropTypes.string,
    handleSelectChat: PropTypes.func.isRequired,
    isSelected: PropTypes.bool
};

const styles = {
    base: {
        padding: '15px',
        cursor: 'pointer',
        ':hover': {
            background: colors.whiteGray
        },
        ':active': {
            opacity: '0.8'
        }
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
