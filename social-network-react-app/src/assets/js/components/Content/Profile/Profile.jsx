import React, {Component} from 'react';
import Styles from './Profile.module.sass'
import Profileinfo from './Profileinfo/Profileinfo'
import Posts from './Posts/Posts'
import {updateInputText} from "../../../services/state";

export default class Profile extends Component{
    render() {
        return(
            <div className={Styles.profile}>
                <Profileinfo></Profileinfo>
                <Posts
                    postsData={this.props.profilePage.postsData}
                    inputPostText={this.props.profilePage.inputPostText}
                    addPost={this.props.addPost}
                    updateInputText={updateInputText}>
                </Posts>
            </div>
        );
    }
}