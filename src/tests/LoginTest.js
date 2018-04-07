/**
 Testing the login component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import Login from '../components/login_signup/Login';

class LoginTest extends Component{
  render(){
    return <Login> </Login>
  }
}

export default Radium(LoginTest)
