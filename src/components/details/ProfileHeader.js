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
        const { src, rounded, header, subHeader, type, id, style, size } = this.props;
        return (
            <WhiteWrapper style={styles.whiteWrapper} size="lg">
                <div style={[style, styles.base]}>
                    <div style={styles.imgDiv}>
                        <AvatarImage src={src}
                            rounded={rounded}
                            style={styles.img}
                            size={size}
                            type={type}
                            id={id}
                        />
                    </div>
                    <div style={styles.textDiv}>
                        <BlackText text={header}
                            style={styles.text}
                            size={size} />
                        <GrayText text={subHeader}
                            style={styles.text}
                            size={size} />
                    </div>
                </div>
            </WhiteWrapper>
        )
    };
}

ProfileHeader.propTypes = {
    src: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    rounded: PropTypes.bool,
    type: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};

const styles = {
    base: {
       
    },
    whiteWrapper: {
        margin: '10px auto',
        paddingTop: '4em',
        paddingBottom: '2em',   
        backgroundImage: 'url(http://www.thepartnermarketinggroup.com/wp-content/uploads/2018/01/LinkedInDefaultBanner.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top', 
        height: '7em'   
    },
    imgDiv: {
        textAlign: 'center',
        paddingBottom: '1em',
    },
    img: {
        border: '3px solid white',
        borderRadius: '500px',
    },
    textDiv: {
        display: 'inline-block',
        verticalAlign: 'top',
    },
    text: {
        margin: '0px',
        maxWidth: '58%',
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
