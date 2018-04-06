/**
A button with an icon, could have a rounded border or not
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, icons, paddings, borders } from '../../resources/constants.js'
import ResponsiveButtonWrapper from './ResponsiveButtonWrapper';

class TabButton extends Component {
  render() {
    // select the needed parameters from the props
    const { name, type, isActive } = this.props;
    return (
      <ResponsiveButtonWrapper
        style={[styles.base, isActive ? styles.active : styles.notActive]}
        // Passes on all the props to apply the size and onClick functions on the button
        {...this.props}>
        <i style={styles.icon} className={icons[type]}></i>
        <span style={styles.name}>
          {name}
        </span>
      </ResponsiveButtonWrapper>
    );
  }
}

// Define the passed input types for this component
TabButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['home', 'connections', 'jobs', 'notifications', 'chat', 'profile']).isRequired,
  isActive: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func.isRequired,
};

const styles = {
  base: {
    border: "none",
    color: colors.lightGray,
    ":hover": {
      color: colors.white
    }
  },
  icon: {
    fontSize: '1.5em'
  },
  name: {
    display: 'block',
    fontSize: '0.8em',
    margin: '5px auto',
  },
  active: {
    color: colors.white,
    borderBottom: `${borders.button.width.active} solid ${colors.white}`
  },
  notActive: {
    border: "none"
  }
}

TabButton = Radium(TabButton);

export default TabButton;
