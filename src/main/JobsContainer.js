import React, {Component} from 'react';
import Radium from 'radium';
import Jobs from '../components/jobs/Jobs'
import api from '../api/api';

class JobsContainer extends Component{
  state = {
        jobsData: []
    }

    componentDidMount() {
        api.getJobRecommendations()
            .then(({ data }) => {
                this.setState({
                    jobsData: data.results
                })
            })
            .catch(err => console.log(err))
    }
    render(){
        return <Jobs
                  jobCardsData = {this.state.jobsData}>
               </Jobs>
      }
  }
  export default Radium(JobsContainer)
