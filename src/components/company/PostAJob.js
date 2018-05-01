import React, { Component } from 'react';
import Radium from 'radium';
import BlueButton from '../buttons/BlueButton';
import Modal from '../wrappers/Modal';
import PropTypes from 'prop-types'
import LabeledInput from '../forms/LabeledInput';
import { colors, borders } from '../../resources/constants.js';



class PostAJob extends Component{

  render() {
    const { handleChange, handleSubmit, show, onClose, toggleModal } = this.props
    return (
      <Modal style={styles.base}
        show={show}
        onClose={toggleModal}
        btnText="Submit Form">
        <header>
          <h1 style={styles.header}>
            Reach the quality candidates you can’t find anywhere else.
          </h1>
        </header>
        <form onSubmit={handleSubmit}>
          <LabeledInput
            id="company-name"
            label="Company Name"
            type="text"
            handleChange={handleChange('companyName')}
            isRequired
          />

          <LabeledInput
            id="job-title"
            label="Job Title"
            type="text"
            handleChange={handleChange('jobTitle')}
            isRequired
          />

          <LabeledInput
            id="company-location"
            label="Company Location"
            type="text"
            handleChange={handleChange('companyLocation')}
            isRequired
          />

          <hr />

          <h2 style={styles.header}>
            Add more job details
          </h2>

          <LabeledInput
            id="industry-type"
            label="Company Industry"
            type="text"
            placeholder=" + Add company industry"
            handleChange={handleChange('industryType')}
          />

          <div>
              <label htmlFor="job-brief" style={styles.textLabel}>Job Description</label>
              <textarea
                  style={styles.textarea}
                  placeholder="Add 4 to 6 bullets to describe the role, and help potential applicants learn what makes it a great opportunity."
                  onChange={handleChange('jobBrief')}
              />
          </div>

          <div style={styles.buttonContainer}>
            <BlueButton name="Post Job" style={styles.button} size="sm" color="blue" onClick={onClose}></BlueButton>
          </div>
        </form>
      </Modal>
    )
  }
}

PostAJob.PropTypes = {
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
  },
  textLabel: {
      fontSize: '0.7em'
  },
  textarea: {
    padding: '5px',
    borderRadius: borders.button.radius.normal,
    border: 'none',
    width: '100%',
    display: 'block'
  }
}
export default Radium(PostAJob)
