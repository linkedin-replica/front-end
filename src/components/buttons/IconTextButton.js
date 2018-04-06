/**
A button with an icon, could have a rounded border or not
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, icons, borders } from '../../resources/constants.js'
import ResponsiveButtonWrapper from './ResponsiveButtonWrapper';

class IconTextButton extends Component {
  render() {
    // Directly get the passed parameters from the props
    const { name, type, hasBorder } = this.props;
    return (
      <ResponsiveButtonWrapper
        style={[styles.base, hasBorder ? styles.bordered : styles.borderless]}
        // Passes on all the props to apply the size and onClick functions on the button
        {...this.props}>
        <i style={styles.icon} className={icons[type]}></i>
        <span>
          {name}
        </span>
      </ResponsiveButtonWrapper>
    );
  }
}

// Define the passed input types for this component
IconTextButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['like', 'share', 'comment', 'write', 'image', 'video']).isRequired,
  hasBorder: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func.isRequired,
};

const styles = {
  base: {
    fontWeight: 'bold',
    color: colors.mediumGray,
    ":hover": {
      background: colors.lightGray,
      color: colors.darkBlue
    }
  },
  icon: {
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

IconTextButton = Radium(IconTextButton);

export default IconTextButton;
