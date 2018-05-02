import React, {Component} from 'react';
import Radium from 'radium';
import api from '../api/api';
import CompanyForUser from '../components/company/CompanyForUser';
import { companyPostsLimit } from '../resources/constants.js'
class CompanyContainer extends Component{
  state = {
      data: {}

  }

  componentDidMount() {
      const { match } = this.props
      api.getCompanyProfile(match.params.id, companyPostsLimit)
          .then(({ data }) => {
              this.setState({
                  data
              })
          })
          .catch(err => console.log(err))

  }
  render(){
    return (
      <CompanyForUser {...this.state.data}/>
  )}
}

export default Radium(CompanyContainer);
