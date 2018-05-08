import React, { Component } from 'react';
import Radium from 'radium';
import Connections from '../components/connections/Connections'
import api from '../api/api';
import { toast } from 'react-toastify';

class ConnectionsContainer extends Component {
    state = {
        friendRequestsData: [],
        friendRecommendationsData: []
    }

    constructor(props){
        super(props)

        if(props.searchData){
            this.state.friendRecommendationsData = props.searchData
        }
    }
    componentDidMount() {
        if(this.props.searchData) return

        api.getFriendRequests()
            .then(({ data }) => {
                this.setState({
                    friendRequestsData: data.results
                })
            })
            .catch(err => toast.error(err.response.data.error))

        api.getFriendRecommendations()
            .then(({ data }) => {
                this.setState({
                    friendRecommendationsData: data.results
                })
            })
            .catch(err => toast.error(err.response.data.error))
    }

    handleConnect = (userId) => (event) => {
        api.addFriend(userId)
            .then(res => {
                toast.success('Added Friend Successfully')
            })
            .catch(err => toast.error("YOu are already friends!!"))

        api.getFriendRecommendations()
            .then(({ data }) => {
                this.setState({
                    friendRecommendationsData: data.results
                })
            })
            .catch(err => toast.error(err.response.data.error))

    }

    handleIgnore = (userId) => (event) => {
        api.ignoreFriendRequest(userId)
            .then()
            .catch(err => toast.error(err.response.data.error))

        api.getFriendRequests()
            .then(({ data }) => {
                this.setState({
                    friendRequestsData: data.results
                })
            })
            .catch(err => toast.error(err.response.data.error))

        console.log('ignore')
    }

    handleAccept = (userId) => (event) => {
        api.acceptFriendRequest(userId)
            .then()
            .catch(err => toast.error(err.response.data.error))

        api.getFriendRequests()
            .then(({ data }) => {
                this.setState({
                    friendRequestsData: data.results
                })
            })
            .catch(err => toast.error(err.response.data.error))

        console.log('accept')
        console.log(userId)
    }

    render() {
        const { friendRequestsData, friendRecommendationsData } = this.state
        const newRecommendations =
            friendRecommendationsData.map(
                friendRecommendation => ({
                    ...friendRecommendation,
                    handleConnect: this.handleConnect(friendRecommendation.userId)
                }))

        const newFriendRequests =
            friendRequestsData.map(
                friendRequest => ({
                    ...friendRequest,
                    handleAccept: this.handleAccept(friendRequest.userId),
                    handleIgnore: this.handleIgnore(friendRequest.userId)
                }))

        return <Connections
            friendRequestsData={newFriendRequests}
            friendRecommendationsData={newRecommendations}>
        </Connections>
    }
}


// const mockData = [
//     { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", name: "Yara Yehia", description: "A Computer Science Student at the German University in Cairo", id: "1" },
//     { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", name: "Hisham Zahran", description: "A Computer Science Student at the German University in Cairo", id: "2" },
//     { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", name: "Esraa Salah", description: "A Computer Science Student at the German University in Cairo", id: "3" },
//     { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", name: "Rana Saeed", description: "A Computer Science Student at the German University in Cairo", id: "5" },
//     { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", name: "Hagar Yasser", description: "A Computer Science Student at the German University in Cairo", id: "6" },
//     { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A", name: "Baher Abdelmalek", description: "A Computer Science Student at the German University in Cairo", id: "7" },

// ]
export default Radium(ConnectionsContainer)
