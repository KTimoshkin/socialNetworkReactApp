import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {getAuthThunkCreator, logoutThunkCreator} from "../../redux/authReducer";

const HeaderContainer = (props) => {
    useEffect(() => {
        props.setAuthUserData();
    }, []);


    return (
        <Header {...props} />
    );

}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {
    setAuthUserData: getAuthThunkCreator,
    logout: logoutThunkCreator
})(HeaderContainer);