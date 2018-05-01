import React, { Component } from 'react';
import Radium from 'radium';
import BorderedButton from '../buttons/BorderedButton';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import PropTypes from 'prop-types'
import { colors } from '../../resources/constants';
import UnlabeledInput from '../forms/UnlabeledInput';

class Login extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props
    return (
      <div styles={styles.darkContainer}>
        <form style={styles.base} onSubmit={handleSubmit}>
          <UnlabeledInput
            className='form-inline'
            type='email'
            placeholder='Email'
            size="sm"
            handleChange={handleChange('email')}
            isRequired
          />
          <UnlabeledInput
            className='form-inline'
            type='password'
            placeholder='Password'
            size="sm"
            style={styles.password}
            handleChange={handleChange('password')}
            isRequired
          />
          <BorderedButton name='Sign in' color='white'> </BorderedButton>
          <a style={styles.forgotPassword} href='url'>Forgot password?</a>
        </form>
      </div>
    )
  }
}

Login.PropTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func
}

const styles = {
  base: {
    padding: '10px 20px 10px 10px',
    marginLeft: '40%',
    display: 'flex',
    alignItems: 'baseline',
    flexShrink: '0',
  },
  password: {
    marginLeft: '20px',
    marginRight: '20px'
  },
  forgotPassword: {
    paddingLeft: '20px',
    fontSize: '0.8em',
    color: 'white',
    flexShrink: 0
  }
}

export default Radium(Login)
