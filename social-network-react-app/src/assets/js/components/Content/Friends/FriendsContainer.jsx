import React from 'react';
import Friends from './Friends';
import {connect} from 'react-redux';
import {
    followActionCreater,
    setCurrentPageActionCreater,
    setFriendsActionCreater, setFriendsCountActionCreater,
    unfollowActionCreater,
} from "../../../services/friendsReducer";

let mapStateToProps = (state) => {
    return {
        friends: state.FriendsPage.friends,
        pageSize: state.FriendsPage.pageSize,
        totalFriendsCount: state.FriendsPage.totalFriendsCount,
        currentPage: state.FriendsPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreater(pageNumber));
        },
        setFriendsCount: (totalCount) => {
            dispatch(setFriendsCountActionCreater(totalCount));
        }
    }
};

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;