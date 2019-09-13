import React, {Component} from 'react';
import Dialogues from './Dialogues'
import {onInputMessageTextActionCreator, sendMessageActionCreator} from "../../../../services/messagesReducer";

export default class DialoguesContainer extends Component{
    inputMessageText = (newMessageText) => {
        this.props.store.dispatch(onInputMessageTextActionCreator(newMessageText))
    };

    sendMessage = () => {
        this.props.store.dispatch(sendMessageActionCreator());
    };

    render() {
        return(
            <Dialogues
                dialoguesData={this.props.store.getState().MessagesPage.dialoguesData}
                inputText={this.props.inputMessageText}
                inputMessageText={this.inputMessageText}
                sendMessage={this.sendMessage}
            ></Dialogues>
        );
    }
}