import React from 'react';
import {connect} from 'react-redux';
import {
    followActionCreater,
    setCurrentPageActionCreater,
    setFriendsActionCreater, setFriendsCountActionCreater,
    unfollowActionCreater,
} from "../../../services/friendsReducer";
import * as axios from 'axios';
import Friends from "./Friends";

class FriendsComponent extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);
                this.props.setFriendsCount(response.data.totalCount);
            });
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items);
            });
    }

    render() {
        return(
            <Friends
                totalFriendsCount={this.props.totalFriendsCount}
                pageSize={this.props.pageSize}
                friends={this.props.friends}
                currentPage={this.props.currentPage}

                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChange={this.onPageChange}
            ></Friends>
        );
    }
}

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

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsComponent);

export default FriendsContainer;