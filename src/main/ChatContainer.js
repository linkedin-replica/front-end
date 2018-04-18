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
        socket: null,
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
        let token = "eyJhbGciOiJIUzUxMiJ9.eyJzZW5kZXJJZCI6IjIiLCJyZWNlaXZlcklkIjoiMSIsImlzcyI6ImxpbmtlZGluLmNoYXQiLCJleHAiOjE1MjQwMTYzNTAsImlhdCI6MTUyMzk4MDM1MH0.4XM6zV-mr6HOfQJrB_cMJnpSl9wZHR3B7zv2JeSnxJmX8Antvqjv19qz9bBjTT2dHb8N4MvgMDMCCeNvKzUk8A"

        this.setState({
            receiverId,
            token,
        })

        this.createSocket('localhost', '9091', token)
        // api.initChat(receiverId)
        //     .then(res => {
        //         const { ip, port, token, history } = res.results;
        //         this.setState({ token, history })
        //         this.createSocket(ip, port, token)
        //     })
    }

    createSocket = (ip, port, token) => {
        const BASE_URL = `http://${ip}:${port}`

        let socket = io(BASE_URL, {
            query: "threadToken=" + token
        })

        io.connect();

        // Connection established
        socket.on('connect', function () {
            alert('Connected to server')
        })

        // Receive messages
        socket.on('chatevent', function (message) {
            this.setState(prevState => ({
                history: [...prevState.history, message]
            }))
        })

        // Disconnected from server
        socket.on('disconnect', function () {
            alert('Disconnected')
            this.setState({
                socket: null
            })
        })

        this.setState({
            socket: socket
        })
    }

    handleSendMessage = (event) => {
        const { socket, inputMessage, token } = this.state
        event.preventDefault();
        if (event.key != 'Enter')
            return;

        console.log(inputMessage)
        if (inputMessage === '')
            return;

        let messageObj = {
            threadToken: token,
            message: inputMessage
        }
        // Send the message throught the socket
        if (socket) {
            socket.emit('chatevent', messageObj);
            this.setState(prevState => ({
                history: [...prevState.history, { message: inputMessage }],
                inputMessage: ''
            }))
        }

    }

    handleChange = (event) => {
        this.setState({
            inputMessage: event.target.value
        })
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
