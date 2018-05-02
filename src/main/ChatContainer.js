import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import Chat from '../components/chat/Chat';
import { toast } from 'react-toastify';

class ChatContainer extends Component {

    state = {
        chats: [],
        receiverId: '',
        receiverName: '',
        token: '',
        history: [],
        inputMessage: ''
    }

    constructor(props) {
        super(props)

        const { mockData } = this.props;
        // If mockdata is passed
        if (mockData)
            this.state.chats = mockData

    }
    componentDidMount() {
        api.getFriendsList()
            .then(({ data }) => {
                this.setState({
                    chats: data.results
                })
            })
            .catch(err => toast.error(err.response.data.error))
    }

    handleSelect = (receiverId, receiverName) => {
        this.setState({
            receiverId,
            receiverName,
        })

        api.initChat(receiverId)
            .then(({ data }) => {
                const { ip, port, sessionToken, history } = data.results;
                this.setState({ token: sessionToken, history })
                this.createSocket(ip, port, sessionToken)
            })
    }

    createSocket = (ip, port, token) => {
        const BASE_URL = `http://${ip}:${port}`

        this.socket = io(BASE_URL, {
            query: "threadToken=" + token
        })

        // Connection established
        this.socket.on('connect', () => {
            toast.success(`Connected with ${this.state.receiverName}`)
        })

        // Receive messages
        this.socket.on('chatevent', (message) => {
            this.setState(prevState => ({
                history: [...prevState.history, message]
            }))
        })

        // Disconnected from server
        this.socket.on('disconnect', () => {
            this.socket = null;
            toast.error(`Ended connection with ${this.state.receiverName}`)
        })
    }

    handleSendMessage = (event) => {
        // Enter was pressed without shift key
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            const { inputMessage, token } = this.state

            if (inputMessage.length == 0 || inputMessage === '\n')
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
        if (event.key === 'Enter' && !event.shiftKey || this.state.receiverId === '' || this.state.inputMessage === '\n') {
            event.preventDefault();
            this.setState({
                inputMessage: ''
            })
        }
        else {
            this.setState({
                inputMessage: event.target.value
            })
        }
    }

    render() {
        const { loggedInUser } = this.props
        const { chats, receiverId, receiverName, history, inputMessage } = this.state;

        const newChats = chats.map(chat => ({ ...chat, handleSelectChat: this.handleSelect, isSelected: receiverId === chat.userId }))
        const chatDetails = history.map(message => ({ ...message, isSender: message.senderId === loggedInUser.userId }))
        return (
            <Chat chats={newChats}
                receiverName={receiverName}
                chatDetails={chatDetails}
                inputMessageVal={inputMessage}
                handleSendMessage={this.handleSendMessage}
                handleChange={this.handleChange} />
        );
    }
}

ChatContainer.propTypes = {
    loggedInUser: PropTypes.object.isRequired
};

export default ChatContainer;
