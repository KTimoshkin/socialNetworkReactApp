import React from 'react'
import Button from "../../../global/Button/Button";
import {Field, reduxForm} from "redux-form";
import Styles from './LoginForm.module.sass'

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={Styles.loginform}>
            <ul>
                <li><Field component={"input"} name={"login"} type={"text"} placeholder="Login"/></li>
                <li><Field component={"input"} name={"password"} type={"text"} placeholder="Password"/></li>
                <li><Field component={"input"} name={"rememberMe"} type={"checkbox"}/>remember me</li>
                <li><Button btnText="Login"></Button></li>
            </ul>
        </form>
    );
}

const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

export default ReduxLoginForm;