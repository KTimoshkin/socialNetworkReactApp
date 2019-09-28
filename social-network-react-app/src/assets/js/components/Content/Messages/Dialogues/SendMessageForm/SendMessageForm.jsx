import React from 'react'
import Button from "../../../../global/Button/Button";
import {Field, reduxForm} from "redux-form";
import Styles from './SendMessageForm.module.sass'

const SendMessageForm = (props) => {
    return(
        <form className={Styles.sendMessage}>
            <textarea
                onChange={props.onInputMessageText}
                onKeyDown={props.onHotKeyDown}
                value={props.inputText}
                ref={props.newMessageElement}
                placeholder="Send message (Enter)">
            </textarea>
            <Button
                btnText="Send"
                btnOnClick={props.onSendMessage}
            ></Button>
        </form>
    );
};

const ReduxSendMessageForm = reduxForm({
    form: 'SenMessage'
})(SendMessageForm);

export default ReduxSendMessageForm;