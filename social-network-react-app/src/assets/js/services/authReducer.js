import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export const setAuthUserDataActionCreater = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
};

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.auth().then(responce => {
            if (responce.data.resultCode === 0) {
                let {id, email, login} = responce.data.data;
                dispatch(setAuthUserDataActionCreater(id, email, login));
            }
        });
    }
};