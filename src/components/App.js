import React, { Component } from 'react';
import Radium from 'radium';

class App extends Component {

  isLoggedIn() {

  }

  render() {
    return (
      <div style={styles.base}>

      </div>);
  }
}

const styles = {
  base: {
    fontFamily: 'Source Sans Pro, sans-serif',
  }
}

export default Radium(App);
