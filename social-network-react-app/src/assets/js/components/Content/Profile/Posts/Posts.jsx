import React, {Component} from 'react';
import Styles from './Posts.module.sass';
import Post from './Post/Post';

export default class Posts extends Component{
    postsElements = this.props.postsData.map((element) => {
        return(
            <Post key={element.id} postText={element.postText}></Post>
        );
    });

    newPostsElement = React.createRef();

    onHotKeyDown = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            this.onAddPost();
        }
    };

    onInputPostText = () => {
        let newPostText = this.newPostsElement.current.value;
        this.props.inputPostText(newPostText);
    };

    onAddPost = () => {
        let newPostText = this.newPostsElement.current.value;
        if (newPostText){
            this.props.addPost()
        }
    };

    render() {
        return(
            <div className={Styles.posts}>
                <div className={Styles.addPosts}>
                    <textarea onChange={this.onInputPostText}
                              ref={this.newPostsElement}
                              onKeyDown={this.onHotKeyDown}
                              value={this.props.inputText}
                              placeholder="Add new post (Enter)">
                    </textarea>
                    <button onClick={this.onAddPost}>Add post</button>
                </div>
                {this.postsElements}
            </div>
        );
    }
}