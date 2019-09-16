import React, { useEffect } from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { connect } from "react-redux";
import {  setDialodgsAC, setCurrentDialogIdAC, setMessagesAC, addMessageAC, sendMessageThunk, getDialogsAndMessageThunk } from '../../redux/messagePageReducer'
import {  RouteComponentProps, withRouter, Redirect } from 'react-router-dom';

interface HomeRouterProps {
    title: string; 
  }
  interface IProps extends RouteComponentProps<HomeRouterProps> {
    sendMessageThunk: Function;
    dialogs: Array<object>;
    messages: Array<object>;
    getDialogsAndMessageThunk: Function;
    addMessage: Function;
    message: string;
    match: any;
    isAuth: boolean;
  }



const Dialogs = (props: IProps) => {

    let onSendMessage = () => {
        let userId = props.match.params.userId;
        props.sendMessageThunk(userId)
    }

    let dialogsElements = props.dialogs.map((dialog: any) => <div key={dialog.id} className={s.oneDialog}> <DialogItem name={dialog.userName} id={dialog.id} /> </div>);
    let messageElements = props.messages.map((m: any) => <Message key={m.id} message={m} />);
    let userId = props.match.params.userId;

    useEffect(() => {
        let userId = props.match.params.userId;
        props.getDialogsAndMessageThunk(userId)
    }, [userId]);

    if (props.isAuth === false) {
        return <Redirect to={`/login`} />
    }

    return (
        <div className={s.dialogs}>
            <div><div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            </div>
            <div className={s.messageArea}> <div className={s.message}>
                {messageElements}
            </div>

                <div className={s.textAndButton}><textarea className={s.textarea} value={props.message} onChange={(e) => { props.addMessage(e.currentTarget.value) }} ></textarea>
                    <button onClick={onSendMessage}>Send</button></div>
            </div>

        </div>
    )
}
let mapStateToProps = (state: any) => {

    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages,
        message: state.messagePage.message,
        isAuth: state.login.isAuth,
    }
}
let mapDispatchToProps = (dispatch: Function) => {

    return {
        setDialogs: (dialogs: any) => {dispatch(setDialodgsAC(dialogs))},
        setCurrentDialogId: (id: number) => {dispatch(setCurrentDialogIdAC(id))},
        setMessages: (messages: string) => {dispatch(setMessagesAC(messages))},
        addMessage: (value: string) => {dispatch(addMessageAC(value)) },
        sendMessageThunk:(userId: number)=>{dispatch(sendMessageThunk(userId))},
        getDialogsAndMessageThunk:(userId: number)=>{dispatch(getDialogsAndMessageThunk(userId))},
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dialogs));
