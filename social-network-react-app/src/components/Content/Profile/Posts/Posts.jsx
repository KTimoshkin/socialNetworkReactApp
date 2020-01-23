import React, {Component} from 'react';
import Styles from './Posts.module.sass';
import Post from './Post/Post';
import Button from "../../../UI/Button/Button";

const Posts = (props) => {
    let postsElements = props.postsData.map((element) => {
        return(
            <Post key={element.id} postText={element.postText}></Post>
        );
    });

    let newPostsElement = React.createRef();

    const onHotKeyDown = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            onAddPost();
        }
    };

    const onInputPostText = () => {
        let newPostText = newPostsElement.current.value;
        props.inputPostText(newPostText);
    };

    const onAddPost = () => {
        let newPostText = newPostsElement.current.value;
        if (newPostText){
            props.addPost()
        }
    };

    return(
        <div className={Styles.posts}>
            <div className={Styles.addPosts}>
                <textarea onChange={onInputPostText}
                          ref={newPostsElement}
                          onKeyDown={onHotKeyDown}
                          value={props.inputText}
                          placeholder="Add new post (Enter)">
                </textarea>
                <br/>
                <Button
                    btnText="Add post"
                    btnOnClick={onAddPost}
                ></Button>
            </div>
            {postsElements}
            </div>
    );
};

export default Posts;