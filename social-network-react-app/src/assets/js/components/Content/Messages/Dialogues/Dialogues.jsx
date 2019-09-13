import React, {Component} from 'react';
import Styles from './Dialogues.module.sass';
import Dialog from './Dialog/Dialog'
import {onInputMessageTextActionCreator, sendMessageActionCreator} from "../../../../services/messagesReducer";

export default class Dialogues extends Component{
    dialoguesElements = this.props.dialoguesData.map((element) => {
        return(
            <Dialog
                dialogMessage={element.dialogMessage}
            ></Dialog>
        );
    });

    newMessageElement = React.createRef();

    onHotKeyDown = (e) => {
        if(e.key === 'Enter') {
            this.sendMessage();
        }
    };

    onInputMessageText = () => {
        let newMessageText = this.newMessageElement.current.value;
        this.props.dispatch(onInputMessageTextActionCreator(newMessageText))
    };

    sendMessage = () => {
        let newMessageText = this.newMessageElement.current.value;
        if (newMessageText){
            this.props.dispatch(sendMessageActionCreator());
        }
    };

    render() {
        return(
            <div className={Styles.dialogues}>
                {this.dialoguesElements}
                <div className={Styles.sendMessage}>
                    <textarea
                        onChange={this.onInputMessageText}
                        onKeyDown={this.onHotKeyDown}
                        ref={this.newMessageElement}
                        value={this.props.inputMessageText}
                        placeholder="Send message (Enter)">
                    </textarea>
                    <button onClick={this.sendMessage}>Send</button>
                </div>
            </div>
        );
    }
}