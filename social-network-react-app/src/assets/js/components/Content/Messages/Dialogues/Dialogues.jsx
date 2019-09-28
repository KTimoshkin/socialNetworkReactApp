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

    let newMessageElement = React.createRef();

    const onHotKeyDown = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            onSendMessage ();
        }
    };

    const onInputMessageText = () => {
        let newMessageText = newMessageElement.current.value;
        props.inputMessageText(newMessageText)
    };

    const onSendMessage = () => {
        let newMessageText = newMessageElement.current.value;
        if (newMessageText){
            props.sendMessage();
        }
    };

    return (
        <div className={Styles.dialogues}>
            {dialoguesElements}
            <ReduxSendMessageForm
                newMessageElement={newMessageElement}
                onHotKeyDown={onHotKeyDown}
                onInputMessageText={onInputMessageText}
                onSendMessage={onSendMessage}
            ></ReduxSendMessageForm>
        </div>
    );
};

export default Dialogues;