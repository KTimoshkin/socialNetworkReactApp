import React from 'react'
import Button from "../../../../UI/Button/Button";
import {Field, reduxForm} from "redux-form";
import Styles from './SendMessageForm.module.sass'
import {maxLenghtCreator, requiredField} from "../../../../../utils/validators";
import {Textarea} from "../../../../UI/FormsControls/FormControls";

let maxLenght100 = maxLenghtCreator(100);

const SendMessageForm = (props) => {
    return(
        <form className={Styles.sendMessage} onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name={'newMessage'}
                placeholder="Send message (Enter)"
                validate={[requiredField, maxLenght100]}
            ></Field>
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