import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const AuthRedirect = (Component) => {
    let mapStateToPropsForRedirect = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    };

    class RedirectAuthComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'./login'}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedRedirectAuthComponent = connect(mapStateToPropsForRedirect)(RedirectAuthComponent);

    return ConnectedRedirectAuthComponent;
}