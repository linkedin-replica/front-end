import React, { Component } from 'react';
import Radium from 'radium';
import { colors, paddings, borders } from '../../resources/constants.js'
import PropTypes from 'prop-types'
class BorderedButton extends Component {
  render() {
    const { name, color, onClick } = this.props;
    return (
      <button
        style={[styles.base, color === 'white' ? styles.whiteBorder : styles.blueBorder]}
        onClick={onClick}>
        <span>
          {name}
        </span>
      </button>
    );
  }
}
BorderedButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['white', 'blue'])
};

const styles = {
  base: {
    background: "none",
    padding: paddings.button,
    fontWeight: 'bold',
    borderRadius: borders.button.radius.normal,
    cursor: 'pointer'
  },
  whiteBorder: {
    border: `${borders.button.width} solid ${colors.white}`,
    color: colors.white,
    ":hover": {
      background: colors.white,
      color: colors.black
    }
  },
  blueBorder: {
    border: `${borders.button.width} solid ${colors.darkBlue}`,
    color: colors.darkBlue,
    ":hover": {
      background: colors.darkBlue,
      color: colors.white
    }
  }
}

BorderedButton = Radium(BorderedButton);

export default BorderedButton;
