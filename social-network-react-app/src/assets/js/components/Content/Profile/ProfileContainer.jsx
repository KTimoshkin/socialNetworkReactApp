import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunkCreator, getUserThunkCreator, updateStatusThunkCreator} from "../../../services/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {AuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1662;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return(
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}></Profile>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
    }
};

export default compose(
    connect(mapStateToProps,{
        getProfile: getUserThunkCreator,
        getStatus: getStatusThunkCreator,
        updateStatus: updateStatusThunkCreator
    }),
    withRouter,
    AuthRedirect
)
(ProfileContainer);