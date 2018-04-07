/**
  Include the components you want to test in the render function with a route
*/
import React, { Component } from 'react';
import Radium from 'radium';
import ButtonsTest from './ButtonsTest';
import WrappersTest from './WrappersTest';
import LoginTest from './LoginTest';
import { Route } from 'react-router-dom'

class Test extends Component {
  render() {
    const { match } = this.props;
    return (
      <div style={styles.base}>
        {/* route for /test/buttons */}
        <Route path={`${match.url}/buttons`} component={ButtonsTest} />

        <Route path={`${match.url}/wrappers`} component={WrappersTest} />

        <Route path={`${match.url}/login`} component={LoginTest} />
        {/*
        Add a new route to test your component in this way
        <Route path={`${match.url}/define route name here`} component={imported component to test} /> */
        }

      </div>
    );
  }
}

const styles = {
  base: {
    fontFamily: 'Source Sans Pro, sans-serif'
  }
}

Test = Radium(Test);
export default Test;
