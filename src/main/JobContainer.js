import React, {Component} from 'react';
import Radium from 'radium';
import Job from '../components/jobs/Job'
import api from '../api/api';

class JobContainer extends Component{
  state = {
        jobData: {}
    }

    componentDidMount() {
        const { match } = this.props;
        api.getJobListing(match.params.id)
            .then(({ data }) => {
                this.setState({
                    jobData: data.results
                })
            })
            .catch(err => console.log(err))
    }

    handleSave = () => (event) => {
      const { match } = this.props;
      api.saveJob(match.params.id)
         .then()
         .catch(err => console.log(err))
       }
     handleApply = () => (event) => {
       const { match } = this.props;
       api.applyJob(match.params.id)
          .then()
          .catch(err => console.log(err))
        }

    render(){
      const {jobData} = {...this.state.jobData,
                  handleSave: this.handleSave(),
                  handleApply: this.handleApply()};
        return <Job
                  {...jobData}>
               </Job>
      }
  }
  export default Radium(JobContainer)
