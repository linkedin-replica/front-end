import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import IconTextButton from '../buttons/IconTextButton';


class postTab extends Component {
    state = { counter: 0 };
    incrementCounter = () => {
        this.setState(prevstate => ({
          counter: prevstate.counter + 1
        }));
      };
    render() {
        return(
        <div style = {styles.base}> 
            <IconTextButton name="Like" type="like" onClick={this.incrementCounter} />
            <IconTextButton name="Comment" type="comment" onClick={this.incrementCounter} />
            <IconTextButton name="Share" type="share" onClick={this.incrementCounter} />
        </div>
    )}; 
}


const styles = {
    base: {
    
    }
  }

export default postTab;