/**
    The bold link text used in all headers in different sizes,
    sm: Small
    md: Medium
    lg: Large
    By default it's set to md
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { paddings } from '../../resources/constants.js'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';

class BoldLink extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { text, type, id, style, size } = this.props;
        return (
            <Link to={`/${type}/${id}`}
                style={styles.link}>
                <span style={[styles.base, style, size ? styles[size] : styles['md']]}>
                    {text}
                </span>
            </Link >
        );
    }
}

// Define the passed input types for this component
BoldLink.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
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

BoldLink = Radium(BoldLink);

export default BoldLink;
