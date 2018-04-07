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
        <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="firstName">First name</label>
        </div>
        <div>
          <input
            id="firstName"
            className='form-inline'
            type='text'
            onChange={handleChange('firstName')}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
        </div>
        <div>
          <input
            id="lastName"
            className='form-inline'
            type='text'
            onChange={handleChange('lastName')}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input
            id="email"
            className='form-inline'
            type='text'
            onChange={handleChange('email')}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input
            id="password"
            className="form-inline"
            type="password"
            onChange={handleChange('password')}
          />
        </div>
        <div style={styles.label}>
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
        padding: '30px',
        textAlign: 'left'
    },
    label: {
      paddingTop: '10px'
    }
}

export default Radium(Signup)
