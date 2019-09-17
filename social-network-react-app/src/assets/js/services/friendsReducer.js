const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET-USERS';

let initialState = {
    friends: []
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_FRIENDS:
            return {
                ...state,
                friends: [...state.friends, ...action.users]
            }
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map(f =>  {
                    if (f.id === action.userId){
                        return {...f, followed: true}
                    }
                    return f;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                friends: state.friends.map(f =>  {
                    if (f.id === action.userId){
                        return {...f, followed: false}
                    }
                    return f;
                })
            };

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