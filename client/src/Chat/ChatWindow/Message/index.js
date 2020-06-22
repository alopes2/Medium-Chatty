import React from 'react';

const Message = (props) => (
    <div>
        <h4>{props.user}</h4>
        <p>{props.message}</p>
    </div>
);

export default Message;