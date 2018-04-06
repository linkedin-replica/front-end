import React, { Component } from 'react';
import Radium from 'radium';
import { colors, paddings, borders } from '../../resources/constants.js'
import PropTypes from 'prop-types'
class BorderedButton extends Component {
  render() {
    const { type, color, onClick } = this.props;
    return (
      <button
        style={[styles.base, color === 'white' ? styles.whiteBorder : styles.blueBorder]}
        onClick={onClick}>
        <span>
          {type}
        </span>
      </button>
    );
  }
}
BorderedButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['white', 'blue'])
};
const styles = {
  base: {
    background: "none",
    padding: paddings.button,
    borderRadius: '2px',
    cursor: 'pointer'
  },
  whiteBorder: {
    border: `${borders.buttonWidth} solid ${colors.white}`,
    color: colors.white,
    ":hover": {
      background: colors.white,
      color: colors.black
    }
  },
  blueBorder: {
    border: `${borders.buttonWidth} solid ${colors.darkBlue}`,
    color: colors.darkBlue,
    ":hover": {
      background: colors.darkBlue,
      color: colors.white
    }
  }
}

BorderedButton = Radium(BorderedButton);

export default BorderedButton;
