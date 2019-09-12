import React, {Component} from 'react';
import Styles from './Posts.module.sass';
import Post from './Post/Post'

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

    onInputText = () => {
        let newPostText = this.newPostsElement.current.value;
        this.props.updateInputText(newPostText);
    };

    addPost = () => {
        let newPostText = this.newPostsElement.current.value;
        if (newPostText){
            this.props.addPost(newPostText);
        }
    };

    render() {
        return(
            <div className={Styles.posts}>
                <div className={Styles.addPosts}>
                    <textarea onChange={this.onInputText}
                              ref={this.newPostsElement}
                              onKeyDown={this.onHotKeyDown}
                              value={this.props.inputPostText}
                              placeholder="Добавить новый пост (Enter)">
                    </textarea>
                    <button onClick={this.addPost}>Add post</button>
                </div>
                {this.postsElements}
            </div>
        );
    }
}