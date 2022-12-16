import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {Button} from "@mui/material";



type DialogsPropsType = {
    dialogsPage:DialogsPageType
    sendMessage:() => void
    updateNewMessageBody: (body: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

const state = props.dialogsPage

    let dialogsElement = state.dialogs.map((d) => <DialogsItem name={d.name} id={d.id}/>)

    let messagesElement = state.message.map((m) => <Message message={m.message} id={m.id}/>)

    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (event:any) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
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
                        <Button onClick={onSendMessageClick} variant="contained" color="success">send</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

