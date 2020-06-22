import React, { Component } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

class Chat extends Component {
    state = {
        connection: null,
        chat: []
    };

    componentDidMount() {
        const newConnection = new HubConnectionBuilder()
            .withUrl('https://localhost:5001/hubs/chat')
            .build();

        this.setState({ connection: newConnection }, () => {
            this.state.connection.start()
                .then(result => {
                    console.log('Connected!');

                    this.state.connection.on('ReceiveMessage', message => {
                        const updatedChat = [...this.state.chat];
                        updatedChat.push(message);

                        this.setState({ chat: updatedChat });
                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        });
    };

    sendMessage = async (user, message) => {
        try {
            const chatMessage = {
                user: user,
                message: message
            };

            if (this.state.connection.connectionStarted) {
                const result = await this.state.connection.send('SendMessage', chatMessage);
                console.log(result);
            }
            else {
                alert('No connection to server yet.');
            }
        }
        catch(e) {
            console.log(e);
        }
    }

    render() {
        return (
        <div>
            <ChatWindow chat={this.state.chat}/>
            <ChatInput sendMessage={this.sendMessage} />
        </div>);
    };
};

export default Chat;