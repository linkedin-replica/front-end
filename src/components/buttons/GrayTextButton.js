import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, borders } from '../../resources/constants.js'
import ResponsiveButtonWrapper from './ResponsiveButtonWrapper';

class GrayTextButton extends Component {
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

GrayTextButton.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
};

const styles = {
  base: {
    border: "none",
    fontWeight: 'bold',
    borderRadius: borders.button.radius.normal,
    color: colors.mediumGray,
    ":hover": {
      background: colors.lightGray,
      color: colors.black
    }
  }
}

GrayTextButton = Radium(GrayTextButton);

export default GrayTextButton;
