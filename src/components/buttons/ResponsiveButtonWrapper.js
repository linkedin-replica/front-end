/**
    The wrapper used in all buttons to offer different sizes,
    sm: Small
    md: Medium
    lg: Large
    By default it's set to md
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { paddings } from '../../resources/constants.js'
import PropTypes from 'prop-types'

class ResponsiveButtonWrapper extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { size, children, style, onClick } = this.props;
        return (
            <button
                style={[styles.base, style, size ? styles[size] : styles['md']]}
                onClick={onClick}>
                {children}
            </button>
        );
    }
}

// Define the passed input types for this component
ResponsiveButtonWrapper.propTypes = {
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    onClick: PropTypes.func.isRequired,
};

const styles = {
    base: {
        background: "none",
        padding: paddings.button,
        cursor: 'pointer',
        outline: '0',
        ':active': {
            opacity: '0.8'
        }
    },
    sm: {
        fontSize: '0.5em'
    },
    md: {
        fontSize: '1em'
    },
    lg: {
        width: '160px'
    }
}

ResponsiveButtonWrapper = Radium(ResponsiveButtonWrapper);

export default ResponsiveButtonWrapper;
