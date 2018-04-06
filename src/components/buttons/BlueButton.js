import React, { Component } from 'react';
import Radium from 'radium';
import { colors, paddings } from '../../resources/constants.js'
import PropTypes from 'prop-types'
class BlueButton extends Component {
  render() {
    const { type, onClick } = this.props;
    return (
      <button
        style={styles.base}
        onClick={onClick}>
        <span>
          {type}
        </span>
      </button>
    );
  }
}
BlueButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
const styles = {
  base: {
    background: colors.darkBlue,
    border: "none",
    padding: paddings.button,
    borderRadius: '2px',
    color: colors.white,
    cursor: 'pointer',
    ":hover": {
      background: colors.mediumBlue

    }
  }

}

BlueButton = Radium(BlueButton);

export default BlueButton;
