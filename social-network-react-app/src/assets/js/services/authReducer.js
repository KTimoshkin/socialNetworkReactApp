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
            }

        default:
            return state;
    }
}

export const setAuthUserDataActionCreater = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    }
};

export const getAuthThunkCreator = () => {
    return (dispatch) => {
        authAPI.auth().then(responce => {
            if (responce.data.resultCode === 0) {
                let {id, email, login} = responce.data.data;
                dispatch(setAuthUserDataActionCreater(id, email, login, true));
            }
        });
    }
};

export const loginThunkCreator = (email, password, rememberme) => {
    return(dispatch) => {
        authAPI.login(email, password, rememberme).then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(getAuthThunkCreator());
            }
        });
    }
};

export const logoutThunkCreator = () => {
    return(dispatch) => {
        authAPI.logout().then(responce => {
            if (responce.data.resultCode === 0) {
                dispatch(setAuthUserDataActionCreater(null, null, null, false));
            }
        });
    }
};