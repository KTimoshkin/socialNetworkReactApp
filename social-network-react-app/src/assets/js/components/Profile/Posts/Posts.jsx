import React, {Component} from 'react';
import Styles from './Posts.module.sass';
import Post from './Post/Post'

export default class Posts extends Component{
    render() {
        return(
            <div className={Styles.posts}>
                <div className={Styles.addPosts}>
                    <textarea name="addPostText" ></textarea>
                    <button>Add post</button>
                </div>
                <Post postText="Its second post"></Post>
                <Post postText="Its first post"></Post>
            </div>
        );
    }
}