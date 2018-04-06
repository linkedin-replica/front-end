import React, { Component } from 'react';
import Radium from 'radium';
import { colors, paddings, borders } from '../../resources/constants.js'
import PropTypes from 'prop-types'
class BlueButton extends Component {
  render() {
    const { name, onClick } = this.props;
    return (
      <button
        style={styles.base}
        onClick={onClick}>
        <span>
          {name}
        </span>
      </button>
    );
  }
}

BlueButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
const styles = {
  base: {
    background: colors.darkBlue,
    border: "none",
    fontWeight: 'bold',
    padding: paddings.button,
    borderRadius: borders.button.radius.normal,
    color: colors.white,
    cursor: 'pointer',
    ":hover": {
      background: colors.mediumBlue
    }
  }

}

BlueButton = Radium(BlueButton);

export default BlueButton;
