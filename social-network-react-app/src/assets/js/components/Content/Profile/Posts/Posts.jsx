import React, {Component} from 'react';
import Styles from './Posts.module.sass';
import Post from './Post/Post'

export default class Posts extends Component{
    render() {
        let postsData = [
            {id: 1, postText: "It's second post"},
            {id: 2, postText: "It's first post"}
        ];

        let postsElements = postsData.map((element) => {
            return(
                <Post postText={element.postText}></Post>
            );
        });

        return(
            <div className={Styles.posts}>
                <div className={Styles.addPosts}>
                    <textarea name="addPostText" ></textarea>
                    <button>Add post</button>
                </div>
                {postsElements}
            </div>
        );
    }
}