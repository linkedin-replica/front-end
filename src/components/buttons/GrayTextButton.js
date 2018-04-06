import React, { Component } from 'react';
import Radium from 'radium';
import {colors, paddings, borders} from '../../resources/constants.js'
import PropTypes from 'prop-types'
class GrayTextButton extends Component {
  render() {
    const {type,color,onClick} = this.props;
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
GrayTextButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
const styles={
  base:{
    background:"none",
    border:"none",
    padding:paddings.button,
    borderRadius: '2px',
    color:colors.mediumGray,
    ":hover": {
      background:colors.lightGray,
      color: colors.black
    }
  }

}

GrayTextButton=Radium(GrayTextButton);

export default GrayTextButton;
