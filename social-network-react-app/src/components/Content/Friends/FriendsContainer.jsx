import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
    followThunkCreator, getFriendsThunkCreator,
    setCurrentPageActionCreater, unfollowThunkCreator,
} from "../../../redux/friendsReducer";
import Friends from "./Friends";
import Preloader from "../../UI/Preloader/Preloader";
import {AuthRedirect} from "../../../hoc/AuthRedirect";
import {compose} from "redux";

const FriendsContainer = (props) => {
    useEffect(() => {
        props.getFriends(props.currentPage, props.pageSize);
    }, []);

    const onPageChange = (page) => {
        props.setCurrentPage(page);
        props.getFriends(page, this.props.pageSize);
    };


    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <Friends
                totalFriendsCount={props.totalFriendsCount}
                pageSize={props.pageSize}
                friends={props.friends}
                currentPage={props.currentPage}

                follow={props.follow}
                unfollow={props.unfollow}
                onPageChange={onPageChange}
            />
        </>
    );

};

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