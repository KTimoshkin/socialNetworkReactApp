let rerenderEntireTree = () => {
    console.log('func is state')
}

let state = {
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
        ]
    },
};

export const addPost = () => {
    let newPost = {
        id: 5,
        postText: state.ProfilePage.inputPostText
    };
    state.ProfilePage.postsData.push(newPost);
    rerenderEntireTree(state);
    state.ProfilePage.inputPostText = '';
};

export const updateInputText = (newInputText)=> {
    state.ProfilePage.inputPostText = newInputText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //наблюдатель
}

export default state;