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
        socket: null
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
        let token = "eyJhbGciOiJIUzUxMiJ9.eyJzZW5kZXJJZCI6IjIiLCJyZWNlaXZlcklkIjoiMSIsImlzcyI6ImxpbmtlZGluLmNoYXQiLCJleHAiOjE1MjMxNDk2NDQsImlhdCI6MTUyMzExMzY0NCwianRpIjoiMiJ9.yyt8px_gjTy2aPoK1Dvp4CUKpct27kzWuPBScN2DC4AWqKFktOrHbd_B20nO4Ij0ViEhxdfgTlgm1aZkxF7P5w"

        this.setState({
            receiverId,
            token,
        })

        this.createSocket('localhost', '9093', token)
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

    handleSendMessage = (message) => {
        let messageObj = {
            threadToken: this.state.token,
            message: message
        }
        // Send the message throught the socket
        if (this.state.socket)
            this.state.socket.emit('chatevent', messageObj);
    }

    render() {
        const { chats, history } = this.state;
        return (
            <Chat chats={chats}
                chatDetails={history}
                handleSelectChat={this.handleSelect}
                handleSendMessage={this.handleSendMessage} />
        );
    }
}

ChatContainer.propTypes = {

};

export default ChatContainer;
