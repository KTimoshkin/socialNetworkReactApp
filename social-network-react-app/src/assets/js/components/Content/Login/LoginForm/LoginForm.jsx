import React from 'react'
import Button from "../../../global/Button/Button";
import {Field, reduxForm} from "redux-form";
import Styles from './LoginForm.module.sass'
import {Input} from "../../../global/FormsControls/FormControls";
import {maxLenghtCreator, requiredField} from "../../../../utils/validators";

let maxLenght30 = maxLenghtCreator(30);
let maxLenght10 = maxLenghtCreator(10);

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={Styles.loginform}>
            <ul>
                <li><Field component={Input} validate={[requiredField, maxLenght30]} name={"login"} type={"text"} placeholder="Login"/></li>
                <li><Field component={Input} validate={[requiredField, maxLenght10]} name={"password"} type={"password"} placeholder="Password"/></li>
                <li><Field component={Input} name={"rememberMe"} type={"checkbox"}/>remember me</li>
                {props.error && <li className={Styles.onError}>{props.error}</li>}
                <li><Button btnText="Login"></Button></li>
            </ul>
        </form>
    );
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

export default ReduxLoginForm;