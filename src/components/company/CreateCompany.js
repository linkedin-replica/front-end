import React, { Component } from 'react';
import { withRouter } from 'react-router'
import Radium from 'radium';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import BlueButton from '../buttons/BlueButton';
import GrayTextButton from '../buttons/GrayTextButton';

import PropTypes from 'prop-types'

class CreateCompany extends Component{
  render(){
    const {handleChange, handleSubmit, history} = this.props
    return (

      <WhiteWrapper style={styles.whiteWrapper} size="lg">
        <form onSubmit={handleSubmit}>

          <h2  style={[styles.text]}>
            Let{"'"}s set up your Company Page
          </h2>

          <div>
            <label style={[styles.label]}> Company Name </label>
            <input type="text" name="companyName" style={styles.input} onChange={handleChange('companyName')}/>
          </div>

          <div>
            <label style={[styles.label]}> LinkedIn public Url </label>
            <label style={[styles.greyLabel]}>linkedin.com/company/</label>
            <input type="text" name="companyUrl" style={styles.input2} onChange={handleChange('companyUrl')}/>
          </div>

          <div>
            <input type="checkbox" name="verify" onChange={handleChange('verify')}/>
            <label style={[styles.greyLabel]}> I verify that I am the official representative of this company and have the right to act on behalf of the company in the creation of this page. </label>
          </div>

          <div style={[styles.btnDiv]}>
            <GrayTextButton name="Cancel" type="Button" onClick={this.props.history.goBack}/>
            <BlueButton name="Create page" size="md" color="blue" onClick={handleSubmit}></BlueButton>
          </div>

          </form>
      </WhiteWrapper>
    )
  }
}

CreateCompany.PropTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  history: PropTypes.object
}

const styles = {

    whiteWrapper: {
        margin: '10px auto',
        padding: '20px',
        textAlign: 'left',
        fontSize: '1.5em'
    },
    button: {
      textAlign: 'center',
      paddingTop: '10px',
      alignSelf:'center',
    },
    btnDiv: {
      justifyContent: 'center',
      alignItems: 'center'
    },


    input: {
      margin: '10px auto',
      padding: '20px',
      width: '100%',
      height: '30px',
    },
    input2: {
      margin: '10px auto',
      padding: '20px',
      width: '50%',
      height: '30px',
    },
    text: {
      textAlign:'center',
      alignSelf:'center',
    },
    label: {
      display: 'block'
    },
    greyLabel: {
      width: '50%',
      color: 'grey',
      fontSize: 15

    }
}

export default withRouter(Radium(CreateCompany))
