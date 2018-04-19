import React, { Component } from 'react';
import Radium from 'radium';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import BlueButton from '../buttons/BlueButton';
import PropTypes from 'prop-types'

class Signup extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props
    return (
      <WhiteWrapper style={styles.whiteWrapper} >
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            className='form-inline'
            type='text'
            onChange={handleChange('firstName')}
            style={styles.label}
          />
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            className='form-inline'
            type='text'
            onChange={handleChange('lastName')}
            style={styles.label}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className='form-inline'
            type='email'
            onChange={handleChange('email')}
            style={styles.label}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="form-inline"
            type="password"
            onChange={handleChange('password')}
            style={styles.label}
          />
          <div style={styles.button}>
            <BlueButton name="Join now" size="lg" color="blue"></BlueButton>
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
    padding: '30px',
    textAlign: 'left',
    fontSize: '1.5em'
  },
  button: {
    paddingTop: '10px',
    textAlign: 'center'
  },
  label: {
    width: '100%',
    height: '30px'
  }
}

export default Radium(Signup)
