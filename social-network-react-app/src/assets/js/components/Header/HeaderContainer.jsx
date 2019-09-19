import React, {Component} from 'react';
import Header from "./Header";
import * as axios from "axios/index";
import {connect} from 'react-redux';
import {setAuthUserDataActionCreater} from "../../services/authReducer";

class HeaderContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(responce => {
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