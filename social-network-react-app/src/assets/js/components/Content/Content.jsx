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
                            <Profile></Profile>
                    } exact></Route>
                <Route
                    path="/messages"
                    render={
                        () =>
                            <Messages></Messages>
                    }>
                </Route>
            </div>
        );
    }
}