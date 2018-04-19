import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import Profile from '../components/profile/Profile';

class ProfileContainer extends Component {

    state = {
        data: {}
    }

    constructor(props) {
        super(props)
        const { mockData } = this.props;
        if (mockData)
            this.state.chats = mockData
    }
   
    componentDidMount() {

    }

    handleSendMessage = (event) => {
        // Enter was pressed without shift key
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            const { inputMessage, token } = this.state

            if (inputMessage.length == 0)
                return

            let messageObj = {
                threadToken: token,
                message: inputMessage
            }
            // Send the message throught the socket
            if (this.socket) {
                this.socket.emit('chatevent', messageObj);
                this.setState({
                    inputMessage: ''
                })
            }
        }
    }

    handleChange = (event) => {
        // Enter was pressed without shift key
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
        } else {
            this.setState({
                inputMessage: event.target.value
            })
        }
    }

    render() {
        const { userId, imageUrl, firstName, lastName, headline, personalInfo, positions, educations, skills, friendsList } = this.props
        return (
            <Profile  props = {this.props}/>
        );
    }
}

ProfileContainer.propTypes = {

};

export default ProfileContainer;