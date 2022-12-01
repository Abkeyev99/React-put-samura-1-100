import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    state: DialogsPageType

}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElement = props.state.dialogs.map((d) => <DialogsItem name={d.name} id={d.id}/>)

    let messagesElement = props.state.message.map((m) => <Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let addMessage = () => {
        alert(newMessageElement.current?.value);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>OK</button>
                </div>

            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    );
};

