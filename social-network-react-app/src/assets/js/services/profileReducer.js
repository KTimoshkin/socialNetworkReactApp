const ADD_POST = 'ADD-POST';
const UPDATE_INPUT_POST_TEXT = 'UPDATE-INPUT-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, postText: "My GitHub profile: https://github.com/KTimoshkin"},
        {id: 2, postText: "This project in GitHub: https://github.com/KTimoshkin/socialNetworkReactApp" }
    ],
    inputPostText: ''
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = state.inputPostText;
            return {
                ...state,
                inputPostText: '',
                postsData: [...state.postsData, {id: 5, postText: newPost}]
            };

        case UPDATE_INPUT_POST_TEXT:
            return {
                ...state,
                inputPostText: action.newInputPostText
            };

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