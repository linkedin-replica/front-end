import React, {Component} from 'react';
import Radium from 'radium';
import PostAJob from '../components/company/PostAJob'

class PostAJobContainer extends Component{
  state = {
    companyName:'',
    companyUrl:'',
    verify:'',
    isOpen: false
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleChange = (key) => (event) => {
    this.setState({
      [key] : event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    //TODO API call
  }

  print = () => {
    console.log(this.state)
  }

  render(){
    return <PostAJob
               handleChange={this.handleChange}
               handleSubmit={this.handleSubmit}
               toggleModal={this.toggleModel}
               isOpen={this.state.isOpen}/>
  }
}

export default Radium(PostAJobContainer)
