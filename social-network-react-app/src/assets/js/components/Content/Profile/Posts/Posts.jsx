import React, {Component} from 'react';
import Styles from './Posts.module.sass';
import Post from './Post/Post'
import {addPostActionCreator, onInputPostTextActionCreator} from "../../../../services/profileReducer";

export default class Posts extends Component{
    postsElements = this.props.postsData.map((element) => {
        return(
            <Post postText={element.postText}></Post>
        );
    });

    newPostsElement = React.createRef();

    onHotKeyDown = (e) => {
        if(e.key === 'Enter') {
            this.addPost();
        }
    };

    onInputPostText = () => {
        let newPostText = this.newPostsElement.current.value;
        this.props.dispatch(onInputPostTextActionCreator(newPostText))
    };

    addPost = () => {
        let newPostText = this.newPostsElement.current.value;
        if (newPostText){
            this.props.dispatch(addPostActionCreator());
        }
    };

    render() {
        return(
            <div className={Styles.posts}>
                <div className={Styles.addPosts}>
                    <textarea onChange={this.onInputPostText}
                              ref={this.newPostsElement}
                              onKeyDown={this.onHotKeyDown}
                              value={this.props.inputPostText}
                              placeholder="Add new post (Enter)">
                    </textarea>
                    <button onClick={this.addPost}>Add post</button>
                </div>
                {this.postsElements}
            </div>
        );
    }
}