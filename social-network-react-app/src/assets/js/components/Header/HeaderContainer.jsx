import React, {Component} from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {getAuthThunkCreator, logoutThunkCreator} from "../../services/authReducer";

class HeaderContainer extends Component {
    componentDidMount() {
        this.props.setAuthUserData();
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
    setAuthUserData: getAuthThunkCreator,
    logout: logoutThunkCreator
})(HeaderContainer);