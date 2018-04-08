import React, { Component } from 'react';
import Radium from 'radium';
import CreateCompanyContainer from '../main/CreateCompanyContainer'
import { colors } from '../resources/constants';


class CompanyTest extends Component {


  render() {
    return (
      <div style={styles.base}>
        <header>
          <h1>Company Testing</h1>
        </header>

        <section>
          <h2>Create Company</h2>
          <CreateCompanyContainer></CreateCompanyContainer>
        </section>
      </div >
    );
  }
}

const styles = {
  base: {
    padding: '10px'
  },
  darkContainer: {
    backgroundColor: colors.darkGray
  }
}

CompanyTest = Radium(CompanyTest);
export default CompanyTest;
