import {friendsAPI} from "../api/api";
import {reduxTypes} from '../constants';

let initialState = {
    friends: [],
    pageSize: 20,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: false
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type){
        case reduxTypes.SET_FRIENDS:
            return {
                ...state,
                friends: [...action.users]
            };

        case reduxTypes.FOLLOW:
            return {
                ...state,
                friends: state.friends.map(f =>  {
                    if (f.id === action.friendId){
                        return {...f, followed: true}
                    }
                    return f;
                })
            };

        case reduxTypes.UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map(f =>  {
                    if (f.id === action.friendId){
                        return {...f, followed: false}
                    }
                    return f;
                })
            };

        case reduxTypes.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case reduxTypes.SET_TOTAL_FRIENDS_COUNT:
            return {
                ...state,
                totalFriendsCount: action.totalFriendsCount
            };

        case reduxTypes.SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }

};

export const setFriendsActionCreater = (users) => {
    return{
        type: reduxTypes.SET_FRIENDS,
        users: users
    }
};

export const followActionCreater = (userId) => {
    return{
        type: reduxTypes.FOLLOW,
        friendId: userId
    }
};

export const unfollowActionCreater = (userId) => {
    return{
        type: reduxTypes.UNFOLLOW,
        friendId: userId
    }
};

export const setCurrentPageActionCreater = (pageNumber) => {
    return{
        type: reduxTypes.SET_CURRENT_PAGE,
        currentPage: pageNumber
    }
};

export const setFriendsCountActionCreater = (totalCount) => {
    return{
        type: reduxTypes.SET_TOTAL_FRIENDS_COUNT,
        totalFriendsCount: totalCount
    }
};

export const setIsFetchingActionCreater = (isFetch) => {
    return{
        type: reduxTypes.SET_IS_FETCHING,
        isFetching: isFetch
    }
};

export const getFriendsThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetchingActionCreater(true));

        friendsAPI.getFriends(currentPage, pageSize).then(response => {
            dispatch(setIsFetchingActionCreater(false));
            dispatch(setFriendsActionCreater(response.items));
            dispatch(setFriendsCountActionCreater(response.totalCount));
        });
    }
};

export const followThunkCreator = (id) => {
    return (dispatch) => {
        friendsAPI.follow(id).then(response => {
            if (response.data.resultCode == 0){
                dispatch(followActionCreater(id));
            }
        });
    }
}

export const unfollowThunkCreator = (id) => {
    return (dispatch) => {
        friendsAPI.unfollow(id).then(response => {
            if (response.data.resultCode == 0){
                dispatch(unfollowActionCreater(id));
            }
        });
    }
};