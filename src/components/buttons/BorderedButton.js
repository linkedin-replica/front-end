import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, borders } from '../../resources/constants.js'
import ResponsiveButtonWrapper from './ResponsiveButtonWrapper';

class BorderedButton extends Component {
  render() {
    const { name, color } = this.props;
    return (
      <ResponsiveButtonWrapper
        style={[styles.base, color === 'white' ? styles.whiteBorder : styles.blueBorder]}
        // Passes on all the props to apply the size and onClick functions on the button
        {...this.props}>
        <span>
          {name}
        </span>
      </ResponsiveButtonWrapper>
    );
  }
}
BorderedButton.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['white', 'blue']),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func.isRequired,
};

const styles = {
  base: {
    fontWeight: 'bold',
    borderRadius: borders.button.radius.normal,
  },
  whiteBorder: {
    border: `${borders.button.width.normal} solid ${colors.white}`,
    color: colors.white,
    ":hover": {
      background: colors.white,
      color: colors.black
    }
  },
  blueBorder: {
    border: `${borders.button.width.normal} solid ${colors.darkBlue}`,
    color: colors.darkBlue,
    ":hover": {
      background: colors.darkBlue,
      color: colors.white
    }
  }
}

BorderedButton = Radium(BorderedButton);

export default BorderedButton;
