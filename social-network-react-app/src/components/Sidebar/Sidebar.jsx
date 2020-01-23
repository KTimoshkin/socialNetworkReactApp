import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './Sidebar.module.sass'
import profileIcon from '../../assets/img/icons/ic_profile.png';
import settingsIcon from '../../assets/img/icons/ic_settings.png';
import messagesIcon from '../../assets/img/icons/ic_messages.png';
import friendsIcon from '../../assets/img/icons/ic_friends.png'

const Sidebar = () => {
    return(
        <nav className={Styles.sidebar}>
            <ul>
                <li><NavLink to="/profile">Profile </NavLink><img src={profileIcon} alt=""/></li>
                <li><NavLink to="/messages">Messages</NavLink><img src={messagesIcon} alt=""/></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/friends">Find friends</NavLink><img src={friendsIcon} alt=""/></li>
                <li><NavLink to="/settings">Settings</NavLink><img src={settingsIcon} alt=""/></li>
            </ul>
        </nav>
    );
}

export default Sidebar;