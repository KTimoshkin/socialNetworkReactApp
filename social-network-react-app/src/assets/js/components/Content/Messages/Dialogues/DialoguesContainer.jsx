import React from 'react';
import Dialogues from './Dialogues'
import {onInputMessageTextActionCreator, sendMessageActionCreator} from "../../../../services/messagesReducer";
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import {AuthRedirect} from "../../../../hoc/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialoguesData: state.MessagesPage.dialoguesData,
        inputText: state.inputMessageText,
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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect)
(Dialogues);