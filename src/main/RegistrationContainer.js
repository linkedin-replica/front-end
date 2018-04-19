import React, { Component } from 'react';
import Radium from 'radium';
import Signup from '../components/login_signup/Signup'
import api from '../api/api'

class RegistrationContainer extends Component {
  state = {
    firstName: '',
    lastName: '',
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
    alert("first name: " + this.state.email + "\nlast name: " + this.state.lastName + "\nemail: " + this.state.email + "\npassword: " + this.state.password)
    api.register(this.state)
      .then(res => {

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

export default Radium(RegistrationContainer)
