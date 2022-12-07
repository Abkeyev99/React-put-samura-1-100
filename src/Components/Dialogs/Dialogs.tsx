import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import  { sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/state";


type DialogsPropsType = {
    store:StoreType
}

export const Dialogs = (props: DialogsPropsType) => {

const state = props.store.getState().dialogsPage

    let dialogsElement = state.dialogs.map((d) => <DialogsItem name={d.name} id={d.id}/>)

    let messagesElement = state.message.map((m) => <Message message={m.message} id={m.id}/>)

    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (event:any) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyAC(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'>
                    </textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

