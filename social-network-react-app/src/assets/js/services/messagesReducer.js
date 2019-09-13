const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_INPUT_MESSAGE_TEXT = 'UPDATE-INPUT-MESSAGE-TEXT';

let initialState = {
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
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            let newDialog = {
                id: 4,
                dialogMessage: state.inputMessageText
            };
            state.dialoguesData.push(newDialog);
            state.inputMessageText = '';
            return state;

        case UPDATE_INPUT_MESSAGE_TEXT:
            state.inputMessageText = action.newInputMessageText;
            return state;

        default:
            return state;
    }
};

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const onInputMessageTextActionCreator = (newMessageText) => {
    return {
        type: UPDATE_INPUT_MESSAGE_TEXT,
        newInputMessageText: newMessageText
    }
};