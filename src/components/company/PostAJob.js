import React, { Component } from 'react';
import { withRouter } from 'react-router'
import Radium from 'radium';
import BlueButton from '../buttons/BlueButton';
import GrayTextButton from '../buttons/GrayTextButton';
import Modal from '../wrappers/Modal';
import PropTypes from 'prop-types'

class PostAJob extends Component{
  render(){
    const {handleChange, handleSubmit, history, toggleModal, isOpen} = this.props
    return (
      <div>
      <Modal show={false}
        onClose={toggleModal}
        btnText="Submit Form">
        <form onSubmit={handleSubmit}>
          <div>
            <h2  style={[styles.text]}>
              Reach the quality candidates you can’t find anywhere else.
            </h2>

            <div>
              <label style={[styles.label]}> Company Name </label>
              <input type="text" name="companyName" style={styles.input} onChange={handleChange('companyName')}/>
            </div>

            <div>
              <label style={[styles.label]}> Job Title </label>
              <input type="text" name="jobTitle" style={styles.input} onChange={handleChange('jobTitle')}/>
            </div>
          </div>


          <div>
            <label style={[styles.label]}> Company Location </label>
            <input type="text" name="companyLocation" style={styles.input} onChange={handleChange('companyLocation')}/>
          </div>

          <h2  style={[styles.text]}>
            Add more job details.
          </h2>

          <div>
            <label style={[styles.label]}> Company Name </label>
            <input type="text" name="companyName" style={styles.input} onChange={handleChange('companyName')}/>
          </div>

          <div>
            <label style={[styles.label]}> Job Title </label>
            <input type="text" name="jobTitle" style={styles.input} onChange={handleChange('jobTitle')}/>
          </div>

          <div>
            <label style={[styles.label]}> Company Location </label>
            <input type="text" name="companyLocation" style={styles.input} onChange={handleChange('companyLocation')}/>
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
      </Modal>
      </div>
    )
  }
}

PostAJob.PropTypes = {
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

export default withRouter(Radium(PostAJob))
