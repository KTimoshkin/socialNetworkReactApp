import React, {Component} from 'react';
import Dialogues from './Dialogues'
import {onInputMessageTextActionCreator, sendMessageActionCreator} from "../../../../services/messagesReducer";
import StoreContext from "../../../../services/storeContext";

export default class DialoguesContainer extends Component{
    render() {
        return(
            <StoreContext.Consumer>
                {(store) => {
                    let state = store.getState();

                    let inputMessageText = (newMessageText) => {
                        store.dispatch(onInputMessageTextActionCreator(newMessageText))
                    };

                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                    };

                    return (
                        <Dialogues
                            dialoguesData={state.MessagesPage.dialoguesData}
                            inputText={state.inputMessageText}
                            inputMessageText={inputMessageText}
                            sendMessage={sendMessage}
                        ></Dialogues>
                    );
                }
            }
            </StoreContext.Consumer>
        );
    }
}