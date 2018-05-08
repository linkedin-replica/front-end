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

  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
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
    const { companyName, jobTitle, companyLocation, industryType, jobBrief } = this.state
    const { companyId } = this.props
    api.postJobCompany({ companyName, jobTitle, companyLocation, industryType, jobBrief, companyId})
      .then(res => {
        toast.success("Job is successfully posted")
      })
      .catch(err => {
        toast.error(err.response.data.err)
      })
    this.toggleModal()
  }

  render() {
    return (
      <div className="App">
        <PostAJob handleChange={this.handleChange} handleSubmit={this.handleSubmit} show={this.state.isOpen}
          onClose={this.toggleModal}></PostAJob>
      </div>
  )}
}
PostAJobContainer = Radium(PostAJobContainer)
PostAJobContainer = withRouter(PostAJobContainer)

export default PostAJobContainer
