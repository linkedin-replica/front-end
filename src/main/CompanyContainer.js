import React, {Component} from 'react';
import Radium from 'radium';
import api from '../api/api';
import CompanyForUser from '../components/company/CompanyForUser';
import { companyPostsLimit } from '../resources/constants.js';
import WallContainer from './WallContainer';

class CompanyContainer extends Component{
  state = {
      data: {}
  }

  componentDidMount() {
      const { match, loggedInUser } = this.props
      api.getCompanyProfile(match.params.id, companyPostsLimit)
          .then(({ data }) => {
              this.setState({
                  data
              })
          })
          .catch(err => console.log(err))

  }
  render(){
    const { loggedInUser } = this.props

    return (
      <div>
        <CompanyForUser {...this.state.data}/>
        <WallContainer loggedInUser={loggedInUser} />
      </div>
  )}
}

export default Radium(CompanyContainer);
