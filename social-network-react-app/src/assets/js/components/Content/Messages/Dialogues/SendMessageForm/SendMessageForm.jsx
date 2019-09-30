import React from 'react'
import Button from "../../../../global/Button/Button";
import {Field, reduxForm} from "redux-form";
import Styles from './SendMessageForm.module.sass'

const SendMessageForm = (props) => {
    return(
        <form className={Styles.sendMessage} onSubmit={props.handleSubmit}>
            <Field
                component={'textarea'}
                name={'newMessage'}
                onKeyDown={props.onHotKeyDown}
                /*onChange={props.onInputMessageText}
                value={props.inputText}
                ref={props.newMessageElement}*/
                placeholder="Send message (Enter)">
            </Field>
            <Button
                btnText="Send"
            ></Button>
        </form>
    );
};

const ReduxSendMessageForm = reduxForm({
    form: 'sendMessage'
})(SendMessageForm);

export default ReduxSendMessageForm;