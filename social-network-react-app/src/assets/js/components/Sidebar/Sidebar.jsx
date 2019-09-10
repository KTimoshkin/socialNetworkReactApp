import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './Sidebar.module.sass'

export default class Sidebar extends Component{
    render() {
        return(
            <nav className={Styles.sidebar}>
                <ul>
                    <li><NavLink to="/">Profile</NavLink></li>
                    <li><NavLink to="/messages">Messages</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
                    <li><NavLink to="/settings">Settings</NavLink></li>
                </ul>
            </nav>
        );
    }
}