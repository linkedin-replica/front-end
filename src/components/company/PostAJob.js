import React, { Component } from 'react';
import { withRouter } from 'react-router'
import Radium from 'radium';
import BlueButton from '../buttons/BlueButton';
import GrayTextButton from '../buttons/GrayTextButton';
import Modal from '../wrappers/Modal';
import PropTypes from 'prop-types'
import WhiteWrapper from '../wrappers/WhiteWrapper';
import LabeledInput from '../forms/LabeledInput';
import { colors } from '../../resources/constants';


class PostAJob extends Component{

  render() {
    const { handleChange, handleSubmit } = this.props
    return (
      <WhiteWrapper style={styles.base}>
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
            label="Email"
            type="text"
            handleChange={handleChange('companyLocation')}
            isRequired
          />

          <hr>

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
              <label htmlFor="job-brief" style={styles.label}>"Job Description"</label>
              <textarea
                  placeholder="Add 4 to 6 bullets to describe the role, and help potential applicants learn what makes it a great opportunity."
                  onChange={handleChange('jobBrief')
              />
          </div>

          <div style={styles.buttonContainer}>
            <BlueButton name="Join now" style={styles.button} size="sm" color="blue"></BlueButton>
          </div>
        </form>
      </WhiteWrapper>
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
  }
}
export default Radium(PostAJob)
