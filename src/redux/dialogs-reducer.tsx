import React from 'react';
import {ActionsTypes, DialogsPageType} from "./store";

let initialState = {
        dialogs: [

            {id: 1, name: 'Azamat'},
            {id: 2, name: 'Abzal'},
            {id: 3, name: 'Martinas'},
            {id: 4, name: 'Rustem'},
            {id: 5, name: 'Maks'},
            {id: 6, name: 'Ademi'},
        ],
        message: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yoo'},
            {id: 5, message: 'Yo'},
        ],
        newMessageBody: ""
};

export const dialogsReducer = (state:DialogsPageType = initialState,action:ActionsTypes) => {


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

