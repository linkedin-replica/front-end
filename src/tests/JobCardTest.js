import React from 'react'
import PropTypes from 'prop-types'
import Jobs from '../components/jobs/Jobs'
import Radium from 'radium'
class JobCardTest extends React.Component {
  render() {
    return (
      <Jobs jobCardsData = {dummyJobCard}/>
    );
  }
}

const dummyJobCard = [
{
  title:'junior developer',
  jobId:'1',
  companyName: 'vodafone',
  companyLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A",
  location:'cairo',

},
{
  title:'Marketing',
  jobId:'3',
  companyName: 'ibm',
  companyLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A",
  location:'cairo',

},
{
  title:'junior developer',
  jobId:'1',
  companyName: 'mumm',
  companyLogo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A",
  location:'cairo',

}];
JobCardTest = Radium(JobCardTest);
export default JobCardTest;
