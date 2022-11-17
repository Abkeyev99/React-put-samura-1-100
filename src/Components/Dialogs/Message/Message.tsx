import React from 'react';
import s from './../Dialogs.module.css'


export type MessageType = {
    id:number
    message: string
}


export const Message = (props: MessageType) => {
    return <div className={s.dialog}>{props.message}</div>
}


