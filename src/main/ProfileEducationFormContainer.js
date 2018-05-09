import React, { Component } from 'react';
import Radium from 'radium';
import CreateCompany from '../components/company/CreateCompany'
import { withRouter } from 'react-router';
import BlueButton from '../components/buttons/BlueButton';
import api from '../api/api';
import { toast } from 'react-toastify';

class ProfileEducationFormContainer extends Component {
  state = {
    data: {
      companyName: '',
      companyUrl: '',
      verify: ''
    },
  }

  handleChange = (key) => (event) => {
    this.setState({
      [key]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { companyName, companyUrl } = this.state
    const { loggedInUser, toggleModal } = this.props
    api.addCompanyProfile({ companyName, companyUrl, loggedInUser })
      .then(res => {
        console.log("Company is successfully created")
      })
      .catch(err => {
        console.log(err.response.data.err)
      })
    toggleModal()
  }

  render() {
    const { isOpen, toggleModal } = this.props
    return (
      <div className="App">
        <CreateCompany handleChange={this.handleChange} handleSubmit={this.handleSubmit} show={isOpen}
          onClose={toggleModal}></CreateCompany>
      </div>
    )
  }
}

ProfileEducationFormContainer = Radium(ProfileEducationFormContainer)
ProfileEducationFormContainer = withRouter(ProfileEducationFormContainer)

export default ProfileEducationFormContainer
