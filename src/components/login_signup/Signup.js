import React, { Component } from 'react';
import Radium from 'radium';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import BlueButton from '../buttons/BlueButton';
import PropTypes from 'prop-types'
import LabeledInput from '../forms/LabeledInput';
import { colors } from '../../resources/constants';

class Signup extends Component {
  render() {
    const { firstName, lastName, email, password, confirmPassword, handleChange, handleSubmit } = this.props
    return (
      <WhiteWrapper style={styles.base}>
        <header>
          <h1 style={styles.header}>
            Get started, it's free
          </h1>
        </header>
        <form onSubmit={handleSubmit}>
          <LabeledInput
            id="first-name"
            label="First Name"
            type="text"
            text={firstName}
            handleChange={handleChange('firstName')}
            isRequired
          />

          <LabeledInput
            id="last-name"
            label="Last Name"
            type="text"
            text={lastName}
            handleChange={handleChange('lastName')}
            isRequired
          />

          <LabeledInput
            id="email"
            label="Email"
            type="email"
            text={email}
            handleChange={handleChange('email')}
            isRequired
          />

          <LabeledInput
            id="password"
            label="Password"
            type="password"
            text={password}
            handleChange={handleChange('password')}
            isRequired
          />

          <LabeledInput
            id="confirm-password"
            label="Confirm Password"
            type="password"
            text={confirmPassword}
            handleChange={handleChange('confirmPassword')}
            isRequired
          />

          <div style={styles.buttonContainer}>
            <BlueButton name="Join now" style={styles.button} size="sm" color="blue"></BlueButton>
          </div>
        </form>
      </WhiteWrapper>
    )
  }
}

Signup.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

const styles = {
  base: {
    padding: '10px',
    background: '#edf0f3',
    margin: '10px auto',
    padding: '30px',
    textAlign: 'left',
    fontSize: '1.5em',
    width: '400px'
  },
  header: {
    fontSize: '1em',
    textAlign: 'center'
  },
  buttonContainer: {
    paddingTop: '15px',
    textAlign: 'center'
  },
  button: {
    width: '100%',
  },
  label: {
    width: '100%',
    height: '30px'
  }
}

export default Radium(Signup)
