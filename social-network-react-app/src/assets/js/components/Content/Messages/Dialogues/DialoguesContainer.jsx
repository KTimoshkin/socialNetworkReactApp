import React from 'react';
import Dialogues from './Dialogues'
import {onInputMessageTextActionCreator, sendMessageActionCreator} from "../../../../services/messagesReducer";
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        dialoguesData: state.MessagesPage.dialoguesData,
        inputText: state.inputMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        inputMessageText: (newMessageText) => {
            dispatch(onInputMessageTextActionCreator(newMessageText))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogues);