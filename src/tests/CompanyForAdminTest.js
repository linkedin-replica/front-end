import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import CompanyForAdmin from '../components/company/CompanyForAdmin';

class CompanyForAdminTest extends Component {

  render() {
    return (
      <CompanyForAdmin />
    )
  }
}
CompanyForAdminTest = Radium(CompanyForAdminTest);
export default CompanyForAdminTest;
