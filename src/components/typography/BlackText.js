/**
    The black text used in all headers in different sizes,
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

class BlackText extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { text, style, size } = this.props;
        return (
            <p style={[styles.base, style, size ? styles[size] : styles['md']]}>
                {text}
            </p>
        );
    }
}

// Define the passed input types for this component
BlackText.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};

const styles = {
    base: {
        color: colors.black,
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

BlackText = Radium(BlackText);
export default BlackText;
