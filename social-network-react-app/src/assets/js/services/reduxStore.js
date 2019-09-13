import {combineReducers, createStore} from 'redux';
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: messagesReducer
});

let store = createStore(reducers);

export default store;