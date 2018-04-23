/**
 Testing the chatting component
*/
import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import Chat from '../components/chat/Chat';
import ChatContainer from '../main/ChatContainer';

class ChatTest extends Component {

    render() {
        return (
            <div style={styles.base}>
                <header>
                    <h1>Chat Testing</h1>
                </header>
                <section>
                    <h2>Chat</h2>
                    <ChatContainer mockData={mockChatsData} />
                </section>
            </div >
        );
    }
}

const mockChatsData = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A',
        name: 'Chat 1',
        miniText: 'Mema la shak feeh'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A',
        name: 'Chat 2',
        miniText: 'Mema la shak feeh'
    }, {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A',
        name: 'Chat 3',
        miniText: 'Mema la shak feeh'
    }, {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A',
        name: 'Chat 4',
        miniText: 'Mema la shak feeh'
    }, {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A',
        name: 'Chat 5',
        miniText: 'Mema la shak feeh'
    },
]

const styles = {
    base: {
        padding: '10px',
    }
}

ChatTest = Radium(ChatTest);
export default ChatTest;
