import React, {Component} from 'react';
import Radium from 'radium';
import api from '../api/api';
import CompanyForUser from '../components/company/CompanyForUser';
import { companyPostsLimit } from '../resources/constants.js';
import WallContainer from './WallContainer';
import { withRouter } from 'react-router';
import CompanyForAdmin from '../components/company/CompanyForAdmin';


class CompanyContainer extends Component{
  state = {
      data: {},
      isAdmin: false
  }

  componentDidMount() {
      const { match, loggedInUser } = this.props
      api.getCompanyProfile(match.params.id)
          .then(({ data }) => {
            this.setState({
                isAdmin:  data.results.userId === "2" ? true:false,
                data: data.results
            })
          })
          .catch(err => console.log(err))
  }
  render(){
    const { loggedInUser } = this.props
    return (
      <div>
        {this.state.isAdmin?
          <CompanyForAdmin {...this.state.data}/> :
          <CompanyForUser {...this.state.data}/>
        }
      </div>
  )}
}

CompanyContainer = Radium(CompanyContainer)
CompanyContainer = withRouter(CompanyContainer)
export default CompanyContainer
