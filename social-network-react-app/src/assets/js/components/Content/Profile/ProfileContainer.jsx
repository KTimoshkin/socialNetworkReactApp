import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios/index";
import {connect} from "react-redux";
import {setProfileActionCreater} from "../../../services/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1662;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfile(response.data);
            });
    }
    render() {
        return(
            <Profile {...this.props} profile={this.props.profile}></Profile>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile
    }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{
    setProfile: setProfileActionCreater
})(WithUrlDataContainerComponent);