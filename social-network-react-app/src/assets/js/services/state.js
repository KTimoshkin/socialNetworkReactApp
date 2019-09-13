import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";

let store = {
    _state: {
        ProfilePage: {
            postsData: [
                {id: 1, postText: "It's second post"},
                {id: 2, postText: "It's first post"}
            ],
            inputPostText: ''
        },

        MessagesPage: {
            dialoguesData: [
                {id: 1, dialogMessage: "Yo"},
                {id: 2, dialogMessage: "Wuzup"},
                {id: 3, dialogMessage: "Homie"}
            ],
            membersData: [
                {id: 1, memberSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/MarkZuckerberg-crop.jpg/210px-MarkZuckerberg-crop.jpg", memberName: "Mark Zuckerberg"},
                {id: 2, memberSrc: "http://ki.ill.in.ua/m/670x450/24422730.jpg", memberName: "Pavel Durov"},
                {id: 3, memberSrc: "https://www.searchengines.ru/wp-content/uploads/2018/07/google-sergey-brin-9982.jpg", memberName: "Sergey Brin"}
            ],
            inputMessageText: ''
        },
    },

    _callSubscriber(){
        console.log('func is state')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.MessagesPage = messagesReducer(this._state.MessagesPage, action);

        this._callSubscriber(this._state);
    }
};

export default store;