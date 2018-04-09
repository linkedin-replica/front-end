import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import JobApplicant from '../components/company/JobApplicant';


class JobApplicantTest extends Component {


  render() {
    return (
      <div style={styles.base}>
        <header>
          <h1>Job Applicant Card Testing</h1>
        </header>

        <section>
          <h2>Job Applicant Card</h2>
          <JobApplicant img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A"
              rounded
              header="Yara Yehia"
              subHeader="A Computer Science Student at the German University in Cairo"
              type="profile"
              id="1" />
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

JobApplicantTest = Radium(JobApplicantTest);
export default JobApplicantTest;
