import React from 'react';
import ReduxLoginForm from "./LoginForm/LoginForm";
import Styles from './Login.module.sass'

const Login = (props) => {
    const onSubmit = (formData) => {

    }

    return(
        <div className={Styles.loginPage}>
            <ReduxLoginForm onSubmit={onSubmit}></ReduxLoginForm>
        </div>
    );
};

export default Login;