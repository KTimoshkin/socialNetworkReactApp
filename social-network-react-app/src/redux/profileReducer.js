import {profileAPI} from "../api/api";
import {reduxTypes} from '../constants';

let initialState = {
    postsData: [
        {id: 1, postText: "My GitHub profile: https://github.com/KTimoshkin"},
        {id: 2, postText: "This project in GitHub: https://github.com/KTimoshkin/socialNetworkReactApp" }
    ],
    inputPostText: '',
    profile: null,
    status: ''
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case reduxTypes.ADD_POST:
            let newPost = state.inputPostText;
            return {
                ...state,
                inputPostText: '',
                postsData: [...state.postsData, {id: 5, postText: newPost}]
            };

        case reduxTypes.UPDATE_INPUT_POST_TEXT:
            return {
                ...state,
                inputPostText: action.newInputPostText
            };

        case reduxTypes.SET_PROFILE:
            return{
                ...state,
                profile: action.profileId
            };

        case reduxTypes.SET_STATUS:
            return{
                ...state,
                status: action.status
            }

        default:
            return state;
    }
};


export const addPostActionCreator = () => {
    return {
        type: reduxTypes.ADD_POST
    }
};

export const onInputPostTextActionCreator = (newPostText) => {
    return {
        type: reduxTypes.UPDATE_INPUT_POST_TEXT,
        newInputPostText: newPostText
    }
};

export const setProfileActionCreater = (profileId) => {
    return {
        type: reduxTypes.SET_PROFILE,
        profileId: profileId
    }
};

export const setStatusActionCreater = (status) => {
    return {
        type: reduxTypes.SET_STATUS,
        status: status
    }
};

export const getUserThunkCreator = (profile) => {
    return (dispatch) => {
        profileAPI.getUser(profile).then(response => {
            dispatch(setProfileActionCreater(response.data));
        });
    }
};

export const getStatusThunkCreator = (profile) => {
    return (dispatch) => {
        profileAPI.getStatus(profile).then(response => {
            dispatch(setStatusActionCreater(response.data));
        });
    }
};

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode == 0) {
                dispatch(setStatusActionCreater(status));
            }
        });
    }
};