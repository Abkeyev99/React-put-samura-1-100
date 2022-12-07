import React from 'react';
import {ActionsTypes, DialogsPageType} from "./state";



export const dialogsReducer = (state:DialogsPageType,action:ActionsTypes) => {


    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            return state;
        case  'SEND-MESSAGE':
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.message.push( {id: 6, message: body},);
            return state;
        default:
            return state;
    }
};


export const updateNewMessageBodyAC = (body:string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body
    } as const
}
export const sendMessageAC = () => ({type: 'SEND-MESSAGE',}) as const

