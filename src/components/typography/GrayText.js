/**
    The gray text used in all headers in different sizes,
    sm: Small
    md: Medium
    lg: Large
    By default it's set to sm
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';

class BoldLink extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { text, type, id, style, size } = this.props;
        return (
            <p style={[styles.base, style, size ? styles[size] : styles['sm']]}>
                {text}
            </p>
        );
    }
}

// Define the passed input types for this component
BoldLink.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};

const styles = {
    base: {
        color: colors.mediumGray,
    },
    sm: {
        fontSize: '0.8em'
    },
    md: {
        fontSize: '1em'
    },
    lg: {
        fontSize: '1.2em'
    }
}

BoldLink = Radium(BoldLink);
export default BoldLink;
