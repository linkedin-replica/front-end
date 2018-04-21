import React, {Component} from 'react';
import Radium from 'radium';
import RegistrationContainer from '../main/RegistrationContainer'

class RegistrationContainerTest extends Component{
  render(){
    return <RegistrationContainer></RegistrationContainer>
  }
}

export default Radium(RegistrationContainerTest)
