import React, { Component } from 'react';
import Radium from 'radium';
import CreateCompany from '../components/company/CreateCompany'
import { withRouter } from 'react-router';
import BlueButton from '../components/buttons/BlueButton';
import api from '../api/api';
import { toast } from 'react-toastify';

class CreateCompanyContainer extends Component {
  state = {
    data: {
      companyName:'',
      companyUrl:'',
      verify:''
    },
    isOpen: this.props.isOpen
  }

  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleChange = (key) => (event) => {
    this.setState({
      [key]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { companyName, companyUrl } = this.state
    const { loggedInUser } = this.props
    api.addCompanyProfile({ companyName, companyUrl, loggedInUser})
      .then(res => {
        toast.success("Company is successfully created")
      })
      .catch(err => {
        toast.error(err.response.data.err)
      })
    this.toggleModal()
  }

  render(){
    return (
      <div className="App">
        <CreateCompany handleChange={this.handleChange} handleSubmit={this.handleSubmit} show={this.state.isOpen}
          onClose={this.toggleModal}></CreateCompany>
      </div>
  )}
}

CreateCompanyContainer = Radium(CreateCompanyContainer)
CreateCompanyContainer = withRouter(CreateCompanyContainer)

export default CreateCompanyContainer
