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
                        <Login></Login>
                }></Route>
            <Route
                path="/profile/:userId?"
                render={
                    () =>
                        <ProfileContainer></ProfileContainer>
                }></Route>
            <Route
                path="/messages"
                render={
                    () =>
                        <Messages></Messages>
                }></Route>
            <Route
                path="/friends"
                render={
                    () =>
                        <FriendsContainer></FriendsContainer>
                }></Route>
        </div>
    );
}

export default Content;