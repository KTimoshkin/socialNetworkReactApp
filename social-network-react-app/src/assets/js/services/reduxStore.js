import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {friendsReducer} from "./friendsReducer"
import {authReducer} from "./authReducer";
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: messagesReducer,
    FriendsPage: friendsReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;