import React from 'react';
import Dialogues from './Dialogues'
import {sendMessageActionCreator} from "../../../../services/messagesReducer";
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import {AuthRedirect} from "../../../../hoc/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialoguesData: state.MessagesPage.dialoguesData,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage) => {
            dispatch(sendMessageActionCreator(newMessage))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect)
(Dialogues);