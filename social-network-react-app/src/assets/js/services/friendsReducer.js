const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET-TOTAL-FRIENDS-COUNT';

let initialState = {
    friends: [],
    pageSize: 20,
    totalFriendsCount: 0,
    currentPage: 1
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_FRIENDS:
            return {
                ...state,
                friends: [...action.users]
            }
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map(f =>  {
                    if (f.id === action.friendId){
                        return {...f, followed: true}
                    }
                    return f;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map(f =>  {
                    if (f.id === action.friendId){
                        return {...f, followed: false}
                    }
                    return f;
                })
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_FRIENDS_COUNT:
            return {
                ...state,
                totalFriendsCount: action.totalFriendsCount
            }

        default:
            return state;
    }

};

export const setFriendsActionCreater = (users) => {
    return{
        type: SET_FRIENDS,
        users: users
    }
}

export const followActionCreater = (userId) => {
    return{
        type: FOLLOW,
        friendId: userId
    }
};

export const unfollowActionCreater = (userId) => {
    return{
        type: UNFOLLOW,
        friendId: userId
    }
};

export const setCurrentPageActionCreater = (pageNumber) => {
    return{
        type: SET_CURRENT_PAGE,
        currentPage: pageNumber
    }
};

export const setFriendsCountActionCreater = (totalCount) => {
    return{
        type: SET_TOTAL_FRIENDS_COUNT,
        totalFriendsCount: totalCount
    }
}