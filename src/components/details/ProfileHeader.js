/**
    The profile header used in all headers in different sizes,
    sm: Small
    md: Medium
    lg: Large
    By default it's set to lg
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import GrayText from '../typography/GrayText';
import BlackText from '../typography/BlackText';
import AvatarImage from '../images/AvatarImage';
import WhiteWrapper from '../wrappers/WhiteWrapper';

class ProfileHeader extends Component {
    render() {
        const { imageUrl, rounded, firstName, lastName, headline, location, type, userId, style, size } = this.props;
        return (
            <div style={[style, styles.base]}>
                <WhiteWrapper style={styles.whiteWrapper} size="lg">
                    <div style={styles.imgDiv}>
                        <AvatarImage src={imageUrl}
                            rounded={rounded}
                            style={styles.img}
                            size={size}
                            type={type}
                            id={userId}
                        />
                    </div>
                    <div style={styles.textDiv}>
                        <BlackText text={firstName + " " + lastName}
                            style={styles.text}
                            size={size} />
                        <GrayText text={headline}
                            style={styles.text}
                            size={size} />
                        <GrayText text={location.country}
                            style={styles.text}
                            size={size} />
                    </div>
                </WhiteWrapper>
            </div>
        )
    };
}

ProfileHeader.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    rounded: PropTypes.bool,
    type: PropTypes.string,
    userId: PropTypes.string.isRequired,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};

const styles = {
    base: {
        marginBottom: '12em',
    },
    whiteWrapper: {
        margin: '10px auto',
        paddingTop: '6em',
        paddingBottom: '2em',
        backgroundImage: 'url(http://www.thepartnermarketinggroup.com/wp-content/uploads/2018/01/LinkedInDefaultBanner.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        height: '7em',
        width: '90%',
    },
    imgDiv: {
        textAlign: 'center',
        marginBottom: '0.8em',
    },
    img: {
        border: '3px solid white',
        borderRadius: '500px',
    },
    textDiv: {
        marginLeft: '3em',
        verticalAlign: 'top',
        textAlign: 'center',
        width: 'inherit',
    },
    text: {
        margin: '0px',
        maxWidth: 'inherit',
        wordWrap: 'break-word',
        textAlign: 'center',
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

ProfileHeader = Radium(ProfileHeader);
export default ProfileHeader;
