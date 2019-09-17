import React from 'react';
import {Route} from 'react-router-dom';
import Styles from './Content.module.sass'
import Profile from './Profile/Profile'
import Messages from './Messages/Messages'
import Friends from "./Friends/FriendsContainer";

const Content = () => {
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
            <Route
                path="/friends"
                render={
                    () =>
                        <Friends></Friends>
                }>
            </Route>
        </div>
    );
}

export default Content;