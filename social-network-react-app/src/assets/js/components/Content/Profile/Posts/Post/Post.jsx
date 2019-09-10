import React, {Component} from 'react';
import Styles from './Post.module.sass';

export default class Post extends Component{
    render() {
        return(
            <div className={Styles.post}>
                <div>
                    <img src="https://amp.businessinsider.com/images/5b9235bb5c5e5254548b59f5-750-563.jpg" alt=""/>
                </div>
                <div className={Styles.postTitle}>
                    <p>{this.props.postText}</p>
                </div>
            </div>
        );
    }
}