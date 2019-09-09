import React, {Component} from 'react';

export default class Sidebar extends Component{
    render() {
        return(
            <nav>
                <ul>
                    <li><a href="">Profile</a></li>
                    <li><a href="">Messages</a></li>
                    <li><a href=""></a>News</li>
                    <li><a href=""></a>Music</li>
                    <li><a href=""></a>Settings</li>
                </ul>
            </nav>
        );
    }
}