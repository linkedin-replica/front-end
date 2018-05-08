import React from 'react'
import PropTypes from 'prop-types'
//import Jobs from '../components/jobs/Jobs'
import Job from '../components/jobs/Job'
import Radium from 'radium'
class JobTest extends React.Component {

  render() {
    return (
    <div>
        <header>
            <h1>Job Testing</h1>
         </header>
        <section>
            <h2>Job test</h2>
            <Job positionName = 'Junior Developer'
            jobId = '1'
            companyName =  'Vodafone'
            companyPicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A"
            location = 'Cairo'
            jobBrief = "To develop programs, test programs and produce documentation for application systems, and adhere to the group methods and standards for all his work by supporting and maintain the implementation of applications."
            requiredSkills = {[
              "Gamed",
              "Fazy3",
              "ASADDD",
              "7enayn",
              "Shaba7 el shab7ana"
            ]}/>
        </section>
    </div>
    );
  }
  }
const dummyJobCard = [
{
  positionName:'junior developer',
  jobId:'1',
  companyName: 'vodafone',
  companyPicture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A",
  location:'cairo'
}];
JobTest = Radium(JobTest);
export default JobTest;
