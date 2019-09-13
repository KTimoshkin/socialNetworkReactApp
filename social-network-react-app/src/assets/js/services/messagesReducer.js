const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_INPUT_MESSAGE_TEXT = 'UPDATE-INPUT-MESSAGE-TEXT';

export const messagesReducer = (state, action) => {
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