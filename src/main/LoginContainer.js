import React, { Component } from 'react';
import Radium from 'radium';
import Login from '../components/login_signup/Login'
import api from '../api/api';
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import { toastPosition } from '../resources/constants';

class LoginContainer extends Component {
  state = {
    email: '',
    password: '',
    msg: ''
  }

  handleChange = (key) => (event) => {
    this.setState({
      [key]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password } = this.state
    api.signIn({ email, password })
      .then(res => {
        api.saveLoginToken(res.data.results)

        this.props.history.push('/profile')
      })
      .catch(err => {
        toast.error(err.response.data.error)
      })
  }

  render() {
    const { successMessage, errMessage } = this.state
    return (
      <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    )
  }
}

LoginContainer = Radium(LoginContainer)
LoginContainer = withRouter(LoginContainer)
export default LoginContainer
