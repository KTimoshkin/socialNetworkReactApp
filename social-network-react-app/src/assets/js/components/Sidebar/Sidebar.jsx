import React, {Component} from 'react';
import Styles from './Sidebar.module.sass'

export default class Sidebar extends Component{
    render() {
        return(
            <nav>
                <ul>
                    <li><a href="">Profile</a></li>
                    <li><a href="">Messages</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Music</a></li>
                    <li><a href="">Settings</a></li>
                </ul>
            </nav>
        );
    }
}