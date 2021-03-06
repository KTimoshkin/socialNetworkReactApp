import React from 'react';
import Styles from './Profile.module.sass'
import Profileinfo from './Profileinfo/Profileinfo'
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return(
        <div className={Styles.profile}>
            <Profileinfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}></Profileinfo>
            <PostsContainer></PostsContainer>
        </div>
    );
}

export default Profile