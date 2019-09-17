import {combineReducers, createStore} from 'redux';
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {friendsReducer} from "./friendsReducer"

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: messagesReducer,
    FriendsPage: friendsReducer
});

let store = createStore(reducers);

export default store;