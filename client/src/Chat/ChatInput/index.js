import React, { useState } from 'react';

const ChatInput = (props) => {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const isUserProvided = user && user !== '';
        const isMessageProvided = message && message !== '';

        if (isUserProvided && isMessageProvided) {
            props.sendMessage(user, message);
        } 
        else {
            alert('Please insert an user and a message.');
        }
    }

    const onUserUpdate = (e) => {
        setUser(e.target.value);
    }

    const onMessageUpdate = (e) => {
        setMessage(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                User
                <input 
                    value={user}
                    onChange={onUserUpdate}/>
            </label>
            <label>
                Message
                <input 
                    value={message}
                    onChange={onMessageUpdate}/>
            </label>
            <button>Submit</button>
        </form>
    )
};

export default ChatInput;