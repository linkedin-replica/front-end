import React, { Component } from 'react';
import Radium from 'radium';
import CreateCompany from '../components/company/CreateCompany'

class CreateCompanyContainer extends Component {
  state = {
    companyName: '',
    companyUrl: '',
    verify: ''

  }
  handleChange = (key) => (event) => {
    this.setState({
      [key]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //TODO API call
  }

  render() {
    return <CreateCompany handleChange={this.handleChange} handleSubmit={this.handleSubmit}></CreateCompany>
  }
}

export default Radium(CreateCompanyContainer)
