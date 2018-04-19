import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import Chat from '../components/chat/Chat';

class ChatContainer extends Component {

    state = {
        chats: [],
        receiverId: '',
        token: '',
        history: [],
        inputMessage: ''
    }

    constructor(props) {
        super(props)

        const { mockData } = this.props;
        if (mockData)
            this.state.chats = mockData

    }
    componentDidMount() {

    }

    handleSelect = (receiverId) => {
        let token = "eyJhbGciOiJIUzUxMiJ9.eyJzZW5kZXJJZCI6IjIiLCJyZWNlaXZlcklkIjoiMSIsImlzcyI6ImxpbmtlZGluLmNoYXQiLCJleHAiOjE1MjQxNjUxMTUsImlhdCI6MTUyNDEyOTExNX0.8gnEnLNFXsYoksGl3rFOSDE-lUD7P00Sbq1BVKsNoUOjW73PrZ6_0KoeZ7n35ivMrusddGSWEkPsBJEEEd0unw"

        this.setState({
            receiverId,
            token,
        })

        this.createSocket('localhost', '9092', token)
        // api.initChat(receiverId)
        //     .then(res => {
        //         const { ip, port, token, history } = res.results;
        //         this.setState({ token, history })
        //         this.createSocket(ip, port, token)
        //     })
    }

    createSocket = (ip, port, token) => {
        const BASE_URL = `http://${ip}:${port}`

        this.socket = io(BASE_URL, {
            query: "threadToken=" + token
        })

        // Connection established
        this.socket.on('connect', function () {
            alert('Connected to server')
        })

        // Receive messages
        this.socket.on('chatevent', (message) => {
            this.setState(prevState => ({
                history: [...prevState.history, message]
            }))
        })

        // Disconnected from server
        this.socket.on('disconnect', function () {
            alert('Disconnected')
            this.socket = null;
        })
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
        const { chats, history, inputMessage } = this.state;
        return (
            <Chat chats={chats}
                chatDetails={history}
                inputMessageVal={inputMessage}
                handleSelectChat={this.handleSelect}
                handleSendMessage={this.handleSendMessage}
                handleChange={this.handleChange} />
        );
    }
}

ChatContainer.propTypes = {

};

export default ChatContainer;
