import React from 'react';
import s from './Message.module.css'

const Message = (props) => {
    debugger
    return (
        <div className={s.dialog}> <b>{props.message.senderName}: </b>{props.message.body}</div>
    )
}

export default Message;
