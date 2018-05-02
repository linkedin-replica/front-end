import React, { Component } from 'react';
import Radium from 'radium';
import CreateCompany from '../components/company/CreateCompany'
import BlueButton from '../components/buttons/BlueButton';

class CreateCompanyContainer extends Component {
  state = {
    data: {
      companyName:'',
      companyUrl:'',
      verify:''
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
    //TODO API call
  }

<<<<<<< HEAD
  render(){
    return (
      <div className="App">
        <BlueButton name="Open Form" onClick={this.toggleModal}/>
        <CreateCompany handleChange={this.handleChange} handleSubmit={this.handleSubmit} show={this.state.isOpen}
          onClose={this.toggleModal}></CreateCompany>
      </div>
  )}
=======
  render() {
    return <CreateCompany handleChange={this.handleChange} handleSubmit={this.handleSubmit}></CreateCompany>
  }
>>>>>>> 589a85130fe975036cde115d47266fcd262c6339
}

export default Radium(CreateCompanyContainer)
