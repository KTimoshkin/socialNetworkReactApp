import {reduxTypes} from '../constants';

let initialState = {
    membersData: [
        {id: 1, memberSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/MarkZuckerberg-crop.jpg/210px-MarkZuckerberg-crop.jpg", memberName: "Mark Zuckerberg"},
        {id: 2, memberSrc: "https://static.life.ru/posts/2018/03/1099729/gr/north/7125236c4439f9bb51402178dfd9853c__980x.png", memberName: "Pavel Durov"},
        {id: 3, memberSrc: "https://www.searchengines.ru/wp-content/uploads/2018/07/google-sergey-brin-9982.jpg", memberName: "Sergey Brin"}
    ],
    dialoguesData: [
        {id: 1, dialogMessage: "Yo"},
        {id: 2, dialogMessage: "It's amazing"},
        {id: 3, dialogMessage: "Homie"}
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type){
        case reduxTypes.SEND_MESSAGE:
            let newDialog = action.newMessage;
            return {
                ...state,
                dialoguesData: [...state.dialoguesData, {id: 4, dialogMessage: newDialog}]
            }

        default:
            return state;
    }
};

export const sendMessageActionCreator = (newMessage) => {
    return {
        type: reduxTypes.SEND_MESSAGE,
        newMessage
    }
};