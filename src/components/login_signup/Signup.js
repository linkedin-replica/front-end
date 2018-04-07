import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../../resources/constants';
import BorderedButton from '../buttons/BorderedButton';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import BlueButton from '../buttons/BlueButton';

class Signup extends Component{
  constructor(){
    super()
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
  }
  handleSubmit = (event) =>{
    event.preventDefault()
  }
  print = () => {
    console.log(this.state)
  }

  render(){
    return (
      <WhiteWrapper style={styles.whiteWrapper}>
        <form onSubmit={this.handleSubmit}>
        <div>
          <label for="firstName">First name</label>
        </div>
        <div>
          <input
            id="firstName"
            className='form-inline'
            type='text'
            onChange={event => this.setState({firstName : event.target.value})}
          />
        </div>
        <div>
          <label for="lastName">Last name</label>
        </div>
        <div>
          <input
            id="lastName"
            className='form-inline'
            type='text'
            onChange={event => this.setState({lastName : event.target.value})}
          />
        </div>
        <div>
          <label for="email">Email</label>
        </div>
        <div>
          <input
            id="email"
            className='form-inline'
            type='text'
            onChange={event => this.setState({email : event.target.value})}
          />
        </div>
        <div>
          <label for="password">Password</label>
        </div>
        <div>
          <input
            id="password"
            className="form-inline"
            type="password"
            onChange={event => this.setState({password : event.target.value})}
          />
        </div>
        <div style={styles.label}>
          <BlueButton name="Join now" size="lg" color="blue"></BlueButton>
        </div>
        </form>
      </WhiteWrapper>
    )
  }
}

const styles = {
    base: {
        padding: '10px'
    },
    whiteWrapper: {
        margin: '10px auto',
        padding: '30px',
        textAlign: 'left'
    },
    label: {
      paddingTop: '10px'
    }
}

export default Radium(Signup)
