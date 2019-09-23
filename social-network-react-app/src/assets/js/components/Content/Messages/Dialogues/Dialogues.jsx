import React from 'react';
import Styles from './Dialogues.module.sass';
import Dialog from './Dialog/Dialog'
import Button from "../../../global/Button/Button";

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
            <div className={Styles.sendMessage}>
                <textarea
                    onChange={onInputMessageText}
                    onKeyDown={onHotKeyDown}
                    value={props.inputText}
                    ref={newMessageElement}
                    placeholder="Send message (Enter)">
                </textarea>
                <Button
                    btnText="Send"
                    btnOnClick={onSendMessage}
                ></Button>
            </div>
        </div>
    );
};

export default Dialogues;