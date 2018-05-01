import React, {Component} from 'react';
import Radium from 'radium';
import Connections from '../components/connections/Connections'
import api from '../api/api';

class ConnectionsContainer extends Component{
  state = {
        friendRequestsData: [],
        friendRecommendationsData: []
    }

  componentDidMount() {
        api.getFriendRequests()
            .then(({ data }) => {
                this.setState({
                    friendRequestsData: data.results
                })
            })
            .catch(err => console.log(err))

        api.getFriendRecommendations()
            .then(({ data }) => {
                this.setState({
                    friendRecommendationsData: data.results
                })
            })
            .catch(err => console.log(err))
    }  

  handleConnect = (userId) => (event) => {
    api.addFriend(userId)
       .then()
       .catch(err => console.log(err))

    api.getFriendRecommendations()
            .then(({ data }) => {
                this.setState({
                    friendRecommendationsData: data.results
                })
            })
            .catch(err => console.log(err))

    console.log('connect')
    console.log(userId)
  }

  handleIgnore = (userId) => (event) => {
    api.acceptFriendRequest(userId)
       .then()
       .catch(err => console.log(err))

    api.getFriendRequests()
            .then(({ data }) => {
                this.setState({
                    friendRequestsData: data.results
                })
            })
            .catch(err => console.log(err))

    console.log('ignore')
    console.log(userId)
  }

  handleAccept = (userId) => (event) => {
    api.acceptFriendRequest(userId)
       .then()
       .catch(err => console.log(err))

    api.getFriendRequests()
            .then(({ data }) => {
                this.setState({
                    friendRequestsData: data.results
                })
            })
            .catch(err => console.log(err))

    console.log('accept')
    console.log(userId)
  }

  render(){
    const { friendRequestsData , friendRecommendationsData} = this.state
    const newRecommendations = 
          friendRecommendationsData.map(
            friendRecommendation => ({
            ...friendRecommendation,
            handleConnect: this.handleConnect(friendRecommendation.id) }))

    const newFriendRequests = 
          friendRequestsData.map(
            friendRequest => ({
            ...friendRequest,
            handleAccept: this.handleAccept(friendRequest.id),
            handleIgnore: this.handleIgnore(friendRequest.id)}))   

    return <Connections 
              friendRequestsData = {newFriendRequests} 
              friendRecommendationsData = {newRecommendations}>
           </Connections>
  }
}
const mockData = [
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", name:"Yara Yehia", description:"A Computer Science Student at the German University in Cairo", id:"1" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", name: "Hisham Zahran", description:"A Computer Science Student at the German University in Cairo", id:"2" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", name: "Esraa Salah", description:"A Computer Science Student at the German University in Cairo", id:"3" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", name: "Rana Saeed", description:"A Computer Science Student at the German University in Cairo", id:"5" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", name: "Hagar Yasser", description:"A Computer Science Student at the German University in Cairo", id:"6" },
    { img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", name: "Baher Abdelmalek", description:"A Computer Science Student at the German University in Cairo", id:"7" },
    
]
export default Radium(ConnectionsContainer)
