/**
 * The FriendRequestItem view holding 
 */

import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
// import { object from constants } from '../../resources/constants.js'
import AvatarImage from '../images/AvatarImage';
import BoldLink from '../typography/BoldLink';
import DetailsHeader from '../details/DetailsHeader';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import GreyAndBorder from '../buttons/AdjacentGreyBorder';

class FriendRequestItem extends Component {

    render() {
        const {
            //  Select the needed props only
            firstName,
            lastName,
            profilePictureUrl,
            userId,
            headline,
            handleAccept,
            handleIgnore,
            ...rest } = this.props;

        return (
            <WhiteWrapper style={styles.whiteWrapper} size="lg">
                <DetailsHeader img={profilePictureUrl}
                    rounded
                    header={firstName + ' ' + lastName}
                    subHeader={headline}
                    type="profile"
                    id={userId}
                    size="md" />
                <div style={styles.btnDiv}>
                    <GreyAndBorder
                        greyText="Ignore"
                        blueText="Accept"
                        greyOnClick={handleIgnore}
                        blueOnClick={handleAccept}
                        size="md">
                    </GreyAndBorder>
                </div>
            </WhiteWrapper>
        );
    }
}

FriendRequestItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    id: PropTypes.string,
    handleAccept: PropTypes.func,
    handleIgnore: PropTypes.func,
};

const styles = {
    base: {

    },
    text: {

    },
    whiteWrapper: {
        padding: '20px',
        textAlign: 'left',
        fontSize: '1.5em',
        position: 'relative'
    },
    btnDiv: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '30%',
        paddingBottom: '25px'
    },
}


FriendRequestItem = Radium(FriendRequestItem);
export default FriendRequestItem;