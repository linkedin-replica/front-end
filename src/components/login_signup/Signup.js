import React, { Component } from 'react';
import Radium from 'radium';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import BlueButton from '../buttons/BlueButton';
import PropTypes from 'prop-types'

class Signup extends Component{
  render(){
    const {handleChange, handleSubmit} = this.props
    return (
      <WhiteWrapper style={styles.whiteWrapper}>
        <form>
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            className='form-inline'
            type='text'
            style={styles.input}
            onChange={handleChange('firstName')}
          />
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            className='form-inline'
            type='text'
            style={styles.input}
            onChange={handleChange('lastName')}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className='form-inline'
            type='text'
            style={styles.input}
            onChange={handleChange('email')}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="form-inline"
            type="password"
            style={styles.input}
            onChange={handleChange('password')}
          />
          <div style={styles.button}>
            <BlueButton name="Join now" size="lg" color="blue" onClick={handleSubmit}></BlueButton>
          </div>
        </form>
      </WhiteWrapper>
    )
  }
}

Signup.PropTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

const styles = {
    base: {
        padding: '10px'
    },
    whiteWrapper: {
        margin: '10px auto',
        padding: '20px',
        textAlign: 'left',
        fontSize: '1.5em'
    },
    button: {
      textAlign: 'center',
      paddingTop: '10px'
    },
    input: {
      width: '100%',
      height: '30px',
    }
}

export default Radium(Signup)
