import React, {Component} from 'react';
import Posts from './Posts'
import {addPostActionCreator, onInputPostTextActionCreator} from "../../../../services/profileReducer";

export default class PostsContainer extends Component{
    inputPostText = (newPostText) => {
        this.props.store.dispatch(onInputPostTextActionCreator(newPostText))
    };

    addPost = () => {
        this.props.store.dispatch(addPostActionCreator());
    };

    render() {
        return(
            <Posts
                postsData={this.props.store.getState().ProfilePage.postsData}
                inputText={this.props.inputPostText}
                inputPostText={this.inputPostText}
                addPost={this.addPost}
            ></Posts>
        );
    }
}