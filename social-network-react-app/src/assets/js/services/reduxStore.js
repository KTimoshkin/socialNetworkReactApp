import {combineReducers, createStore} from 'redux';
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {friendsReducer} from "./friendsReducer"
import {authReducer} from "./authReducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: messagesReducer,
    FriendsPage: friendsReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store;

window.store = store;