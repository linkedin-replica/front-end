/**
  Include the components you want to test in the render function with a route
*/
import React, { Component } from 'react';
import Radium from 'radium';
import ButtonsTest from './ButtonsTest';
import WrappersTest from './WrappersTest';
import CompanyTest from './CompanyTest';
import TypographyTest from './TypographyTest';
import DetailsHeaderTest from './DetailsHeaderTest';
import AdjacentGreyBorderTest from './AdjacentGreyBorderTest';
import { Route } from 'react-router-dom'

class Test extends Component {
  render() {
    const { match } = this.props;
    return (
      <div style={styles.base}>
        {/* route for /test/buttons */}
        <Route path={`${match.url}/buttons`} component={ButtonsTest} />

        <Route path={`${match.url}/wrappers`} component={WrappersTest} />

        <Route path={`${match.url}/company`} component={CompanyTest} />

        <Route path={`${match.url}/typography`} component={TypographyTest} />

        <Route path={`${match.url}/details`} component={DetailsHeaderTest} />

        <Route path={`${match.url}/respond`} component={AdjacentGreyBorderTest} />
      </div>
    );
  }
}

const styles = {
  base: {
  }
}

Test = Radium(Test);
export default Test;
