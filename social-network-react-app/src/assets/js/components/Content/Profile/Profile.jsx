import React from 'react';
import Styles from './Profile.module.sass'
import Profileinfo from './Profileinfo/Profileinfo'
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {
    return(
        <div className={Styles.profile}>
            <Profileinfo></Profileinfo>
            <PostsContainer></PostsContainer>
        </div>
    );
}

export default Profile