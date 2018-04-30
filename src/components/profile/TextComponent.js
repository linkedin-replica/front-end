import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, borders } from '../../resources/constants.js'

class TextComponent extends Component {
  render() {
    return (
        <div size={this.props.size}> 
            {this.props.text}
        </div>
    );
  }
}

TextComponent.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  bold: PropTypes.bool,
  color: PropTypes.string
};

const styles = {

}

TextComponent = Radium(TextComponent);
export default TextComponent;
