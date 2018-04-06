import React, { Component } from 'react';
import Radium from 'radium';
import { colors, paddings, borders } from '../../resources/constants.js'
import PropTypes from 'prop-types'

class GrayTextButton extends Component {
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
GrayTextButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
const styles = {
  base: {
    background: "none",
    border: "none",
    padding: paddings.button,
    fontWeight: 'bold',
    borderRadius: borders.button.radius.normal,
    color: colors.mediumGray,
    cursor: 'pointer',
    ":hover": {
      background: colors.lightGray,
      color: colors.black
    }
  }
}

GrayTextButton = Radium(GrayTextButton);

export default GrayTextButton;
