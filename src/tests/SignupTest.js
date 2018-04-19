/**
 Testing the signup component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import Signup from '../components/login_signup/Signup';

class SignupTest extends Component{
  render(){
    return <Signup> </Signup>
  }
}

export default Radium(SignupTest)
