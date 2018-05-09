/**
    The ProfileEducationItem header used in all headers in different sizes,
    sm: Small
    md: Medium
    lg: Large
    By default it's set to md
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import GrayText from '../typography/GrayText';
import BlackText from '../typography/BlackText';
import BoldLink from '../typography/BoldLink';
import AvatarImage from '../images/AvatarImage';
import WhiteWrapper from '../wrappers/WhiteWrapper';

class ProfileFriend extends Component {
    render() {
        const { userId, firstName, lastName, headline, profilePictureUrl, style, size } = this.props;
        return (
            <div style={[style, styles.base]}>
                <AvatarImage src={profilePictureUrl}
                    rounded
                    type="profile" id={userId} size="md" style={styles.imgDiv} />
                <span style={styles.textDiv}>
                    <BoldLink text={firstName + " " + lastName} type="profile" id={userId}
                        size="md" style={styles.text} />
                    <GrayText text={headline} size="md" style={styles.text} />
                </span>
            </div>
        )
    };
}

ProfileFriend.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    headline: PropTypes.string,
    userId: PropTypes.string,
    imageUrl: PropTypes.string,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    base: {
        display: 'inline-block',
        marginLeft: '20px',
        width: '100%',
        paddingBottom: '2%',
    },
    imgDiv: {
        display: 'inline-block',

        float: 'left'
    },
    textDiv: {
        display: 'inline-block',
        verticalAlign: 'top',
        float: 'left',
    },

    title: {
        fontWeight: 'bold'
    },
    text: {
        margin: '5px',
    },
    description: {
        margin: '5px',
        wordWrap: 'break-word',
        maxWidth: '500px',
    },
    sm: {
        fontSize: '0.5em'
    },
    md: {
        fontSize: '1em'
    },
    lg: {
        fontSize: '1.5em'
    }
}

ProfileFriend = Radium(ProfileFriend);
export default ProfileFriend;
