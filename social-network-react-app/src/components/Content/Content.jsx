import React from 'react';
import {Route} from 'react-router-dom';
import Styles from './Content.module.sass'
import ProfileContainer from './Profile/ProfileContainer'
import Messages from './Messages/Messages'
import FriendsContainer from "./Friends/FriendsContainer";
import Login from "./Login/Login";

const Content = () => {
    return(
        <div className={Styles.content}>
            <Route
                path="/login"
                render={
                    () =>
                        <Login />
                } />
            <Route
                path="/profile/:userId?"
                render={
                    () =>
                        <ProfileContainer />
                } />
            <Route
                path="/messages"
                render={
                    () =>
                        <Messages />
                } />
            <Route
                path="/friends"
                render={
                    () =>
                        <FriendsContainer />
                } />
        </div>
    );
}

export default Content;