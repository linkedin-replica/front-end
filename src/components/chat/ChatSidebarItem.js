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
        const { img, name, miniText, handleSelectChat } = this.props;
        return (
            <div style={styles.base} >
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
    handleSelectChat: PropTypes.func.isRequired
};

const styles = {
    base: {
        padding: '15px'
    }
}

ChatSidebarItem = Radium(ChatSidebarItem);

export default ChatSidebarItem;
