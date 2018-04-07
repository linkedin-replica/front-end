/**
 * A white wrapper for all app sections
 */

import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
// import { object from constants } from '../../resources/constants.js'
import { colors, borders } from '../../resources/constants';

class WhiteWrapper extends Component {

    /**
     * render function is what returns the component view
     */
    render() {
        const {
            children,
            style,
            size,
          } = this.props;

        return (
            <div
                style={[
                    styles.base,
                    style,
                    size ? styles[size] : styles['md']
                ]}>
                {children}
            </div>
        );
    }
}

/**
 * Define here what does this component take as props
 */
WhiteWrapper.propTypes = {
    children: PropTypes.node, // Content
    style: PropTypes.object, // Content style
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};

/**
 * Write here the CSS required for the component, instead of '-' it will be in camelCase
 */
const styles = {
    base: {
        background: colors.white,
        borderRadius: borders.wrapper.radius,
        boxShadow: '0 0 0 1px rgba(0,0,0,.1), 0 2px 3px rgba(0,0,0,.2)'
    },
    sm: {

    },
    md: {
        width: '550px'
    },
    lg: {

    }
}

// Wrap it with Radium
WhiteWrapper = Radium(WhiteWrapper);

export default WhiteWrapper;