import React, {Component} from 'react';
import Styles from './Dialogues.module.sass';
import Dialog from './Dialog/Dialog'

export default class Dialogues extends Component{
    dialoguesElements = this.props.dialoguesData.map((element) => {
        return(
            <Dialog
                key={element.id}
                dialogMessage={element.dialogMessage}
            ></Dialog>
        );
    });

    newMessageElement = React.createRef();

    onHotKeyDown = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            this.onSendMessage ();
        }
    };

    onInputMessageText = () => {
        let newMessageText = this.newMessageElement.current.value;
        this.props.inputMessageText(newMessageText)
    };

    onSendMessage = () => {
        let newMessageText = this.newMessageElement.current.value;
        if (newMessageText){
            this.props.sendMessage();
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
                        value={this.props.inputText}
                        ref={this.newMessageElement}
                        placeholder="Send message (Enter)">
                    </textarea>
                    <button onClick={this.onSendMessage}>Send</button>
                </div>
            </div>
        );
    }
}