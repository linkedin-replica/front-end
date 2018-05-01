import React, { Component } from 'react';
import Radium from 'radium';
import Signup from '../components/login_signup/Signup'
import api from '../api/api'
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';

class RegistrationContainer extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = (key) => (event) => {
    this.setState({
      [key]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { firstName, lastName, email, password, confirmPassword } = this.state
    api.register({ firstName, lastName, email, password, confirmPassword })
      .then(res => {
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        })
        toast.success('Registered Successfully, Now Login')
      })
      .catch(err => {
        toast.error(err.response.data.error)
      })
  }

  print = () => {
    console.log(this.state)
  }

  render() {
    return <Signup handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state}></Signup>
  }
}
RegistrationContainer = Radium(RegistrationContainer)
RegistrationContainer = withRouter(RegistrationContainer)

export default RegistrationContainer
