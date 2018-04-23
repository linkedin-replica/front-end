import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import JobApplicant from '../components/company/JobApplicant';
import GreyAndBorder from '../components/buttons/AdjacentGreyBorder';
import ListOfApplicants from '../components/company/ListOfApplicants';
import CreateCompanyContainer from '../main/CreateCompanyContainer';
import CompanyBasicInfo from '../components/company/CompanyBasicInfo';
import PostAJobContainer from '../main/PostAJobContainer';
import BlueButton from '../components/buttons/BlueButton';

class CompanyTest extends Component {

  render() {
    return (
      <div style={styles.base}>
        <header>
          <h1>Company Components Testing</h1>
        </header>

        <section>
          <h2>Adjacent Buttons</h2>
          <GreyAndBorder greyText="Decline" blueText="Accept" size="md"></GreyAndBorder>
        </section>

        <section>
          <h2>Company Basic Info</h2>
          <CompanyBasicInfo img='http://www.mamboproductora.com.ar/wp-content/uploads/2017/04/descarga.png'
            companyName='Microsoft'
            industryType='Computer Software'
            companyLocation='Redmond, WA'
            id='1'/>
        </section>


        <section>
          <h2>Job Applicant Card</h2>
          <JobApplicant img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A"
              rounded
              header="Yara Yehia"
              subHeader="A Computer Science Student at the German University in Cairo"
              type="profile"
              id="1" />
        </section>

        <section>
          <h2>List of Applicants</h2>
          <ListOfApplicants />
        </section>

        <section>
          <h2>Create Company Form</h2>
          <CreateCompanyContainer/>
        </section>

        <section>
          <h2>Post A Job Form</h2>
          <PostAJobContainer/>
        </section>

      </div >
    );
  }
}

const styles = {
  base: {
    padding: '10px'
  }
}

CompanyTest = Radium(CompanyTest);
export default CompanyTest
;
