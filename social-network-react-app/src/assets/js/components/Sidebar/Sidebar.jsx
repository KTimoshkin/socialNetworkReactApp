import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Styles from './Sidebar.module.sass'

export default class Sidebar extends Component{
    render() {
        return(
            <nav className={Styles.sidebar}>
                <ul>
                    <li><Link to="/">Profile</Link></li>
                    <li><Link to="/messages">Messages</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
        );
    }
}