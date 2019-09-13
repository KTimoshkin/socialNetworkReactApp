import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Styles from './Content.module.sass'
import Profile from './Profile/Profile'
import Messages from './Messages/Messages'

export default class Content extends Component{
    render() {
        return(
            <div className={Styles.content}>
                <Route
                    path="/"
                    render={
                        () =>
                            <Profile
                                profilePage={this.props.state.ProfilePage}
                                dispatch={this.props.dispatch}
                            ></Profile>
                    } exact></Route>
                <Route
                    path="/messages"
                    render={
                        () =>
                            <Messages
                                messagePage={this.props.state.MessagesPage}
                                dispatch={this.props.dispatch}
                            ></Messages>
                    }>
                </Route>
            </div>
        );
    }
}