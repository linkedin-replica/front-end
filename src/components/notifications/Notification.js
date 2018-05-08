import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import AvatarImage from '../images/AvatarImage';
import BoldLink from '../typography/BoldLink';
import GrayText from '../typography/GrayText';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import { Link } from 'react-router-dom';
import { colors } from '../../resources/constants';
class Notification extends Component {

    render() {
        const {
            //  Select the needed props only
            text,
            link,
            timestamp,
            style,
            read,
            ...rest } = this.props;

        return (
            <WhiteWrapper style={[styles.whiteWrapper, read ? styles.read : ""]} size="lg">
                <Link to={`/${link}`}
                    style={styles.link}>
                    <span style={[styles.base, style, "md"]}>
                        {text}
                    </span>
                </Link >
                <GrayText text={timestamp}
                    style={styles.text}
                    size="md" />
            </WhiteWrapper>
        );
    }
}

Notification.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string,
    timestamp: PropTypes.number,
    style: PropTypes.object, // Content defined styles
    read: PropTypes.bool,
};

const styles = {
    base: {
        color: colors.black,
        ':hover': {
            color: colors.mediumBlue,
            textDecoration: 'underline'
        }
    },
    link: {
        fontWeight: 'bold',
        textDecoration: 'none',
        ':link': {
            color: colors.black
        },
    },
    text: {
        margin: '0px',
        maxWidth: '60%',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    whiteWrapper: {
        margin: '0px',
        padding: '20px',
        textAlign: 'left',
        fontSize: '1.5em',
        position: 'relative',
        align: 'center'
    },
    read: {
        background: colors.lightBlue
    }
}


Notification = Radium(Notification);
export default Notification;