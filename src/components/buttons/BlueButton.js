import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings, borders } from '../../resources/constants.js'
import ResponsiveButtonWrapper from './ResponsiveButtonWrapper';

class BlueButton extends Component {
  render() {
    const { name } = this.props;
    return (
      <ResponsiveButtonWrapper
        style={styles.base}
        // Passes on all the props to apply the size and onClick functions on the button
        {...this.props}>
        <span>
          {name}
        </span>
      </ResponsiveButtonWrapper>
    );
  }
}

BlueButton.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func.isRequired,
};

const styles = {
  base: {
    background: colors.darkBlue,
    border: "none",
    fontWeight: 'bold',
    borderRadius: borders.button.radius.normal,
    color: colors.white,
    ":hover": {
      background: colors.mediumBlue
    }
  }
}

BlueButton = Radium(BlueButton);

export default BlueButton;
