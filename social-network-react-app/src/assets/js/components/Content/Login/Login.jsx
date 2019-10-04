import React from 'react';
import ReduxLoginForm from "./LoginForm/LoginForm";
import Styles from './Login.module.sass'
import {loginThunkCreator, logoutThunkCreator} from "../../../services/authReducer";
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    } else {
        return(
            <div className={Styles.loginPage}>
                <ReduxLoginForm onSubmit={onSubmit}></ReduxLoginForm>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login: loginThunkCreator, logout: logoutThunkCreator})(Login);