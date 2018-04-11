/**
 * The FriendRequestItem view holding 
 */

import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
// import { object from constants } from '../../resources/constants.js'
import AvatarImage from '../images/AvatarImage';
import BoldLink from '../typography/BoldLink';
import GrayText from '../typography/GrayText';
import DetailsHeader from '../details/DetailsHeader';

class FriendRequestItem extends Component {

    render() {
        const {
            //  Select the needed props only
            name,
            description,
            img,
            id,
            handleAccept,
            handleIgnore,
            ...rest } = this.props;

        return (
            <div
                style={[
                    styles.base,
                ]}>
                <DetailsHeader img={img}
                    rounded
                    header={name}
                    subHeader={description}
                    type="profile"
                    id="1" />
            </div>
        );
    }
}

/**
 * Define here what does this component take as props
 */
FriendRequestItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    id: PropTypes.string,
    handleAccept: PropTypes.func,
    handleIgnore: PropTypes.func,
};

/**
 * Write here the CSS required for the component, instead of '-' it will be in camelCase
 * e.g. background-color will be backgroundColor
 */
const styles = {
    base: {

    },
    text: {

    },
}

// Wrap it with Radium
FriendRequestItem = Radium(FriendRequestItem);

export default FriendRequestItem;