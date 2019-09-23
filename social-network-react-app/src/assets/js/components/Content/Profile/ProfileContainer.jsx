import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserThunkCreator} from "../../../services/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {AuthRedirect} from "../../../hoc/AuthRedirect";

class ProfileContainer extends Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1662;
        }
        this.props.getProfile(userId);
    }
    render() {
        return(
            <Profile {...this.props} profile={this.props.profile}></Profile>
        );
    }
}

const RedirectAuthComponent = AuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
    }
};

let WithUrlDataContainerComponent = withRouter(RedirectAuthComponent);

export default connect(mapStateToProps,{
    getProfile: getUserThunkCreator
})(WithUrlDataContainerComponent);