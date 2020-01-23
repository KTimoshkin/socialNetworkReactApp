import React from 'react';
import Posts from './Posts'
import {addPostActionCreator, onInputPostTextActionCreator} from "../../../../redux/profileReducer";
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {
        postsData: state.ProfilePage.postsData,
        inputText: state.inputPostText,
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts);