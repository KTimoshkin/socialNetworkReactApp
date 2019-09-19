import React, {Component} from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {setAuthUserDataActionCreater} from "../../services/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends Component {
    componentDidMount() {
        authAPI.auth().then(responce => {
                if (responce.data.resultCode === 0) {
                    let {id, email, login} = responce.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return(
            <Header {...this.props}></Header>
        );
    }
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
    setAuthUserData: setAuthUserDataActionCreater
})(HeaderContainer);