import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Styles from './Content.module.sass'
import Profile from './Profile/Profile'
import Messages from './Messages/Messages'
import {updateInputText} from "../../services/state";

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
                                addPost={this.props.addPost}>
                                updateInputText={updateInputText}
                            </Profile>
                    } exact></Route>
                <Route
                    path="/messages"
                    render={
                        () =>
                            <Messages
                                state={this.props.state.MessagesPage}
                            ></Messages>
                    }>
                </Route>
            </div>
        );
    }
}