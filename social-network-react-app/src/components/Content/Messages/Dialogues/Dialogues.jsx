import React from 'react';
import Styles from './Dialogues.module.sass';
import Dialog from './Dialog/Dialog'
import ReduxSendMessageForm from "./SendMessageForm/SendMessageForm";

const Dialogues = (props) => {
    let dialoguesElements = props.dialoguesData.map((element) => {
        return(
            <Dialog
                key={element.id}
                dialogMessage={element.dialogMessage}
            ></Dialog>
        );
    });

    const onHotKeyDown = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            addNewMessage();
        }
    };

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessage);

    };

    return (
        <div className={Styles.dialogues}>
            {dialoguesElements}
            <ReduxSendMessageForm
                onSubmit={addNewMessage}
                onHotKeyDown={onHotKeyDown}
            ></ReduxSendMessageForm>
        </div>
    );
};

export default Dialogues;