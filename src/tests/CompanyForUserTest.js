import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import CompanyForUser from '../components/company/CompanyForUser';

class CompanyForUserTest extends Component {

  render() {
    return (
      <CompanyForUser />
    )
  }
}
CompanyForUserTest = Radium(CompanyForUserTest);
export default CompanyForUserTest;
