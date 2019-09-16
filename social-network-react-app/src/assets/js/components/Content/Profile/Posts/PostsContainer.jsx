import React from 'react';
import Posts from './Posts'
import {addPostActionCreator, onInputPostTextActionCreator} from "../../../../services/profileReducer";
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        postsData: state.ProfilePage.postsData,
        inputText: state.inputPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        inputPostText: (newPostText) => {
            dispatch(onInputPostTextActionCreator(newPostText))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;