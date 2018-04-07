import React, { Component } from 'react';
import Radium from 'radium';
import BorderedButton from '../buttons/BorderedButton';

class Login extends Component{
  constructor(){
    super()
    this.state = {
      email:'',
      password:''
    }
  }

  print = () => {
    console.log(this.state)
  }

  render(){
    return (
      <div style={styles.base}>
          <input
            className='form-inline'
            type='text'
            placeholder='Email'
            onChange={event => this.setState({email: event.target.value})}
          />
          <input
            style={styles.Password}
            className='form-inline'
            type='password'
            placeholder='Password'
            onChange={event => this.setState({password: event.target.value})}
          />
          <BorderedButton name='Sign in' color='white' onClick={this.print}> </BorderedButton>
          <a style={styles.ForgotPassword} href='url'>Forgot password?</a>
      </div>
    )
  }
}

const styles = {
    base: {
        padding: '10px'
    },
    Password:{
        marginLeft: '30px'
    },
    ForgotPassword: {
        fontSize: '0.9em'
    }
}

export default Radium(Login)
