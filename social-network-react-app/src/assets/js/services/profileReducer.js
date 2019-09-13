const ADD_POST = 'ADD-POST';
const UPDATE_INPUT_POST_TEXT = 'UPDATE-INPUT-POST-TEXT';

export const profileReducer = (state, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                postText: state.inputPostText
            };
            state.postsData.push(newPost);
            state.inputPostText = '';
            return state;

        case UPDATE_INPUT_POST_TEXT:
            state.inputPostText = action.newInputPostText;
            return state;

        default:
            return state;
    }
};


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const onInputPostTextActionCreator = (newPostText) => {
    return {
        type: UPDATE_INPUT_POST_TEXT,
        newInputPostText: newPostText
    }
};