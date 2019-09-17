import React from 'react';
import Friends from './Friends';
import {connect} from 'react-redux';
import {followActionCreater, setFriendsActionCreater, unfollowActionCreater} from "../../../services/friendsReducer";

let mapStateToProps = (state) => {
    return {
        friends: state.FriendsPage.friends
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreater(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreater(userId));
        },
        setFriends: (users) => {
            dispatch(setFriendsActionCreater(users));
        }
    }
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;