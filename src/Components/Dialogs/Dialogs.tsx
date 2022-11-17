import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialigesElement = props.state.dialogs.map((d) => <DialogsItem name={d.name} id={d.id}/>)

    let messedesElement = props.state.message.map((m) => <Message message={m.message} id={m.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialigesElement}
            </div>
            <div className={s.messages}>
                {messedesElement}
            </div>
        </div>
    );
};

