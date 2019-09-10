import React, {Component} from 'react';
import Styles from './Profile.module.sass'
import Profileinfo from './Profileinfo/Profileinfo'
import Posts from './Posts/Posts'

export default class Profile extends Component{
    render() {
        return(
            <div className={Styles.profile}>
                <Profileinfo></Profileinfo>
                <Posts></Posts>
            </div>
        );
    }
}