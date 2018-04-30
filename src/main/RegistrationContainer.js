import React, { Component } from 'react';
import Radium from 'radium';
import Signup from '../components/login_signup/Signup'
import api from '../api/api'
import { withRouter } from 'react-router';

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
        console.log(res.data.results)
        this.props.history.push('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }

  print = () => {
    console.log(this.state)
  }

  render() {
    return <Signup handleChange={this.handleChange} handleSubmit={this.handleSubmit}></Signup>
  }
}
RegistrationContainer = Radium(RegistrationContainer)
RegistrationContainer = withRouter(RegistrationContainer)

export default RegistrationContainer
