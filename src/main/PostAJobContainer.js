import React, { Component } from 'react';
import Radium from 'radium';
import PostAJob from '../components/company/PostAJob'
import { withRouter } from 'react-router';
import BlueButton from '../components/buttons/BlueButton';
import api from '../api/api';
import { toast } from 'react-toastify';

class PostAJobContainer extends Component {

  state = {
    data: {
      companyName: '',
      jobTitle: '',
      companyLocation: '',
      industryType: '',
      jobBrief: ''
    },
    isOpen: this.props.isOpen
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleChange = (key) => (event) => {
    this.setState({
      [key]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { data } = this.state
    api.postJobCompany()
      .then(res => {

      })
      .catch(err => {
        toast.error(err.response.data.error)
      })

  }

  render() {
    return (
      <div className="App">
        <BlueButton name="Open Form" onClick={this.toggleModal}/>
        <PostAJob handleChange={this.handleChange} handleSubmit={this.handleSubmit} show={this.state.isOpen}
          onClose={this.toggleModal}></PostAJob>
      </div>
  )}
}
PostAJobContainer = Radium(PostAJobContainer)
PostAJobContainer = withRouter(PostAJobContainer)

export default PostAJobContainer
