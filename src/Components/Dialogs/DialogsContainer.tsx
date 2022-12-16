import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import  { sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import {Button} from "@mui/material";
import {Dialogs} from "./Dialogs";



type DialogsPropsType = {
    store:StoreType
}

export const DialogsContainer = (props: DialogsPropsType) => {

    const state = props.store.getState().dialogsPage


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body));
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    )
}

