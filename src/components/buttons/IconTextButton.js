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
    // Directly get the needed props

    const { name, type, style, hasBorder, onClick, ...rest } = this.props;
    return (
      <ResponsiveButtonWrapper
        style={[styles.base, style, hasBorder ? styles.bordered : styles.borderless]}


        // Passes on the rest of the props to apply the size and onClick functions on the button
        {...rest}
        onClick={onClick}>
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
  name: PropTypes.string,
  type: PropTypes.oneOf(['like', 'share', 'comment', 'write', 'image', 'video']),
  hasBorder: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  style: PropTypes.obj,
  onClick: PropTypes.func
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
