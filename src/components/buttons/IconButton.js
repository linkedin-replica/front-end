/**
An icon only button, could have a rounded border or not, 
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, icons, borders } from '../../resources/constants.js'
import ResponsiveButtonWrapper from './ResponsiveButtonWrapper';

class IconButton extends Component {
  render() {
    // Directly get the needed props
    const { type, hasBorder, ...rest } = this.props;
    return (
      <ResponsiveButtonWrapper
        style={[styles.base, hasBorder ? styles.bordered : styles.borderless]}
        // Passes on the rest of the props to apply the size and onClick functions on the button
        {...rest}>
        <i style={styles.icon} className={icons[type]}></i>
      </ResponsiveButtonWrapper>
    );
  }
}

// Define the passed input types for this component
IconButton.propTypes = {
  type: PropTypes.oneOf(['edit', 'add']).isRequired,
  hasBorder: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func.isRequired,
};

const styles = {
  base: {
    fontWeight: 'bold',
    color: colors.mediumGray,
    ":hover": {
      color: colors.darkBlue
    }
  },
  icon: {
    fontSize: '1.5em',
    marginRight: '5px'
  },
  borderless: {
    border: "none"
  },
  bordered: {
    border: `${borders.button.width.normal} solid ${colors.mediumGray}`,
    borderRadius: borders.button.radius.rounded,
    ":hover": {
      border: `${borders.button.width.normal} solid ${colors.darkBlue}`,
    }
  }
}

IconButton = Radium(IconButton);
export default IconButton;
