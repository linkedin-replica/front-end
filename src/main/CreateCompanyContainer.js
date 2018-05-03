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

  render(){
    return (
      <div className="App">
        <BlueButton name="Open Form" onClick={this.toggleModal}/>
        <CreateCompany handleChange={this.handleChange} handleSubmit={this.handleSubmit} show={this.state.isOpen}
          onClose={this.toggleModal}></CreateCompany>
      </div>
  )}
}

export default Radium(CreateCompanyContainer)
