/**
  Include the components you want to test in the render function
*/
import React, { Component } from 'react';
import Radium from 'radium';
import ButtonsTest from './tests/ButtonsTest.js';

class Test extends Component {
  render() {
    return (
      <div style={styles.base}>
        <ButtonsTest/>
      </div>
    );
  }
}

const styles = {
  base: {
    fontFamily: 'Source Sans Pro, sans-serif'
  }
}

export default Radium(Test);
