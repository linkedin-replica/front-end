import React, { Component } from 'react';
import Radium from 'radium';
import Login from '../components/login_signup/Login'
import api from '../api/api';
import { withRouter } from 'react-router';

class LoginContainer extends Component {
  state = {
    email: '',
    password: ''
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
        console.log(err)
      })
  }

  render() {
    return <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit}></Login>
  }
}

LoginContainer = Radium(LoginContainer)
LoginContainer = withRouter(LoginContainer)
export default LoginContainer
