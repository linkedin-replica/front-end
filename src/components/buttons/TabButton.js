/**
A button with an icon, could have a rounded border or not
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors, icons, paddings, borders } from '../../resources/constants.js'
import PropTypes from 'prop-types'

class TabButton extends Component {
  render() {
    // Directly get the passed parameters from the props
    const { name, type, onClick, isActive } = this.props;
    return (
      <button
        style={[styles.base, isActive ? styles.active : styles.notActive]}
        onClick={onClick}>
        <i style={styles.icon} className={icons[type]}></i>
        <div>
          {name}
        </div>
      </button>
    );
  }
}

// Define the passed input types for this component
TabButton.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['home', 'connections', 'jobs', 'notifications', 'chat', 'profile']).isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool
};

const styles = {
  base: {
    border: "none",
    background: "none",
    padding: paddings.button,
    fontWeight: 'bold',
    color: colors.lightGray,
    cursor: 'pointer',
    ":hover": {
      color: colors.white
    }
  },
  icon: {
  },
  active: {
    borderBottom: `${borders.button.width} solid ${colors.white}`
  },
  notActive: {
    border: "none"
  }


}

TabButton = Radium(TabButton);

export default TabButton;
