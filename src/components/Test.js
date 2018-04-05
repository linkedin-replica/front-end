import React, { Component } from 'react';
import Radium from 'radium';
import IconTextButton from './buttons/IconTextButton.js';
const Result = props => {
  return (
    <div>
      {props.counter}
    </div>
  );
};
class Test extends Component {

  state = { counter: 0 };

  incrementCounter = incrementValue => {
    this.setState(prevstate => ({
      counter: prevstate.counter + incrementValue
    }));
  };

    render() {
        return (
            <div style={styles.base}>

               <IconTextButton className="rounded-btn" incrementValue={1} onClickFunction={this.incrementCounter} />

            </div>);
    }
}

const styles = {
    base: {
        fontFamily: 'Source Sans Pro, sans-serif',
    }
}

export default Radium(Test);
