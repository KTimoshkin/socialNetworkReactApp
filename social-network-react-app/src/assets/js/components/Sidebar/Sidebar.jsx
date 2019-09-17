import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './Sidebar.module.sass'
import profileIcon from '../../../img/icons/profile.png';
import settingsIcon from '../../../img/icons/settings.png';
import messagesIcon from '../../../img/icons/messages.png';
import friendsIcon from '../../../img/icons/friends.png'

const Sidebar = () => {
    return(
        <nav className={Styles.sidebar}>
            <ul>
                <li><NavLink to="/">Profile </NavLink><img src={profileIcon} alt=""/></li>
                <li><NavLink to="/messages">Messages</NavLink><img src={messagesIcon} alt=""/></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/friends">Friends</NavLink><img src={friendsIcon} alt=""/></li>
                <li><NavLink to="/settings">Settings</NavLink><img src={settingsIcon} alt=""/></li>
            </ul>
        </nav>
    );
}

export default Sidebar;