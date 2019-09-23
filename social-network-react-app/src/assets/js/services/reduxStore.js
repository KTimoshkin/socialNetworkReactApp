import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {friendsReducer} from "./friendsReducer"
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: messagesReducer,
    FriendsPage: friendsReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;