import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunkCreator, getUserThunkCreator, updateStatusThunkCreator} from "../../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {AuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {
    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authUserId;
        }
        props.getProfile(userId);
        props.getStatus(userId);
    }, []);

    return (
        <Profile
            {...props}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus} />
    );

};

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        authUserId: state.auth.userId,
        isAuth: state.auth.isAuth

    }
};

export default compose(
    connect(mapStateToProps, {
        getProfile: getUserThunkCreator,
        getStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator
    }),
    withRouter,
    AuthRedirect
)
(ProfileContainer);