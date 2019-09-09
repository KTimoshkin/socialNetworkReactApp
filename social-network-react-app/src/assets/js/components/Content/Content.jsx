import React, {Component} from 'react';
import Styles from './Content.module.sass'
import Profile from '../Profile/Profile'

export default class Content extends Component{
    render() {
        return(
            <div className={Styles.content}>
                <Profile></Profile>
            </div>

        );
    }
}