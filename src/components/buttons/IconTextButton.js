/**
A button with an icon, could have a rounded border or not
*/
import React, { Component } from 'react';
import Radium from 'radium';
import {colors, icons, paddings, borders} from '../../resources/constants.js'
import PropTypes from 'prop-types'

class IconTextButton extends Component {
  render() {
    // Directly get the passed parameters from the props
    const {type,onClick,hasBorder} = this.props;
    return (
      <button
        style={[styles.base, hasBorder? styles.bordered:styles.borderless]}
        onClick={onClick}>
        <i style={styles.icon} className={icons[type].icon}></i>
        <span>
          {icons[type].name}
        </span>
      </button>
    );
  }
}

// Define the passed input types for this component
IconTextButton.propTypes = {
  type: PropTypes.oneOf(['like', 'share', 'comment', 'write', 'image', 'video']).isRequired,
  onClick: PropTypes.func.isRequired,
  hasBorder: PropTypes.bool,
};

const styles={
  base: {
    background:"none",
    padding: paddings.button,
    color:colors.mediumGray,
    cursor:'pointer',
    ":hover": {
      background:colors.lightGray,
      color:colors.darkBlue
    }
  },
  icon:{
    marginRight: '5px'
  },
  borderless:{
    border: "none"
  },
  bordered:{
    border: `${borders.buttonWidth} solid ${colors.mediumGray}`,
    borderRadius: '50px',
    ":hover": {
      border: `${borders.buttonWidth} solid ${colors.darkBlue}`,
    }
  }
}

IconTextButton = Radium(IconTextButton);

export default IconTextButton;
