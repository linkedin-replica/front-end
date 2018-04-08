import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, borders } from '../../resources/constants.js'
import ResponsiveButtonWrapper from './ResponsiveButtonWrapper';

class BlueButton extends Component {
  render() {
    // Directly get the needed props
    const { name, ...rest } = this.props;
    return (
      <ResponsiveButtonWrapper
        style={styles.base}
        // Passes on the rest of the props to apply the size and onClick functions on the button
        {...rest}>
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
