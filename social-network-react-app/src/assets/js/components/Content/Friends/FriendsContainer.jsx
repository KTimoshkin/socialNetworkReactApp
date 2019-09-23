import React from 'react';
import {connect} from 'react-redux';
import {
    followThunkCreator, getFriendsThunkCreator,
    setCurrentPageActionCreater, unfollowThunkCreator,
} from "../../../services/friendsReducer";
import Friends from "./Friends";
import Preloader from "../../global/Preloader/Preloader";
import {AuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";

class FriendsContainer extends React.Component{
    componentDidMount() {
        this.props.getFriends(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page);
        this.props.getFriends(page, this.props.pageSize);
    }

    render() {
        return(
            <>
                {this.props.isFetching ? <Preloader />: null}
                <Friends
                    totalFriendsCount={this.props.totalFriendsCount}
                    pageSize={this.props.pageSize}
                    friends={this.props.friends}
                    currentPage={this.props.currentPage}

                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChange={this.onPageChange}
                ></Friends>
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.FriendsPage.friends,
        pageSize: state.FriendsPage.pageSize,
        totalFriendsCount: state.FriendsPage.totalFriendsCount,
        currentPage: state.FriendsPage.currentPage,
        isFetching: state.FriendsPage.isFetching
    }
};

export default compose(
    connect(mapStateToProps, {
        follow: followThunkCreator,
        unfollow: unfollowThunkCreator,
        setCurrentPage: setCurrentPageActionCreater,
        getFriends: getFriendsThunkCreator
    }),
    AuthRedirect)
(FriendsContainer);