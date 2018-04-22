/**
A button with an icon, could have a rounded border or not
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, icons, borders } from '../../resources/constants.js'
import ResponsiveButtonWrapper from './ResponsiveButtonWrapper';

class TabButton extends Component {
  render() {
    //  Directly get the needed props
    const { name, type, isActive, ...rest } = this.props;
    return (
      <ResponsiveButtonWrapper
        style={[styles.base, isActive ? styles.active : styles.notActive]}
        // Passes on the rest of the props to apply the size and onClick functions on the button
        {...rest}>
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
  type: PropTypes.oneOf(['home', 'connections', 'jobs', 'notifications', 'chat', 'profile', 'articles']).isRequired,
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
    marginTop: '2px',
    fontSize: '1.5em'
  },
  name: {
    display: 'block',
    fontSize: '0.9em',
    marginTop: '6px',
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
