import React, {Component} from 'react'
import Radium from 'radium'
import LoginContainer from '../main/LoginContainer'

class LoginContainerTest extends Component{
  render(){
    return <LoginContainer></LoginContainer>
  }
}

export default Radium(LoginContainerTest)
