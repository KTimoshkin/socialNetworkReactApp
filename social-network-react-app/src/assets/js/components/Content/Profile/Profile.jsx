import React, {Component} from 'react';
import Styles from './Profile.module.sass'
import Profileinfo from './Profileinfo/Profileinfo'
import PostsContainer from "./Posts/PostsContainer";

export default class Profile extends Component{
    render() {
        return(
            <div className={Styles.profile}>
                <Profileinfo></Profileinfo>
                <PostsContainer store={this.props.store}></PostsContainer>
            </div>
        );
    }
}