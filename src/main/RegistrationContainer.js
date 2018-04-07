import React, {Component} from 'react';
import Radium from 'radium';
import Signup from '../components/login_signup/Signup'

class RegistrationContainer extends Component{
  state = {
    firstName:'',
    lastName:'',
    email:'',
    password:''
  }
  handleChange = (key) => (event) => {
    this.setState({
      [key] : event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    alert("first name: " + this.state.email +"\nlast name: " + this.state.lastName + "\nemail: " + this.state.email + "\npassword: " + this.state.password)
    //TODO API call
  }

  print = () => {
    console.log(this.state)
  }

  render(){
    return <Signup handleChange={this.handleChange} handleSubmit={this.handleSubmit}></Signup>
  }
}

export default Radium(RegistrationContainer)
