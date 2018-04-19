import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../../resources/constants';
import BorderedButton from '../buttons/BorderedButton';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import PropTypes from 'prop-types'

class Login extends Component{
  render(){
    const {handleChange, handleSubmit} = this.props
    return (
      <div styles={styles.darkContainer}>
        <form style={styles.base} onSubmit={handleSubmit}>
            <input
              className='form-inline'
              type='email'
              placeholder='Email'
              onChange={handleChange('email')}
            />
            <input
              style={styles.password}
              className='form-inline'
              type='password'
              placeholder='Password'
              onChange={handleChange('password')}
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
        padding: '10px',
        paddingRight: '20px',
        backgroundColor: colors.darkGray,
        textAlign: 'right'
    },
    password:{
        marginLeft: '20px',
        marginRight: '20px'
    },
    forgotPassword: {
        paddingLeft: '20px',
        fontSize: '0.8em',
        color: 'white'
    }
}

export default Radium(Login)
