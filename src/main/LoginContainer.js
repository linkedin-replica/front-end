import React, {Component} from 'react';
import Radium from 'radium';
import Login from '../components/login_signup/Login'

class LoginContainer extends Component{
  state = {
    email: '',
    password: ''
  }

  handleChange = (key) => (event) => {
    this.setState({
      [key] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    alert("email: " + this.state.email + "\npassword: " + this.state.password)
  }

  render(){
    return <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit}></Login>
  }
}

export default Radium(LoginContainer)
