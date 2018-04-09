import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import JobApplicant from '../components/company/JobApplicant';
import GreyAndBorder from '../components/buttons/AdjacentGreyBorder';
import ListOfApplicants from '../components/company/ListOfApplicants';


class RespondToApplicantTest extends Component {


  render() {
    return (
      <div style={styles.base}>
        <header>
          <h1>Respond to Applicant Testing</h1>
        </header>

        <section>
          <h2>Adjacent Buttons</h2>
          <GreyAndBorder greyText="Decline" blueText="Accept" size="md"></GreyAndBorder>
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
      </div >
    );
  }
}

const styles = {
  base: {
    padding: '10px'
  }
}

RespondToApplicantTest = Radium(RespondToApplicantTest);
export default RespondToApplicantTest;
