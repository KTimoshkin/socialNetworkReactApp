import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './Header.module.sass'
import img from '../../../img/site-logo.png';

const Header = ()=> {
    return(
        <header>
            <div className={Styles.header}>
                <div className={Styles.siteLogo}>
                    <NavLink to="/" >
                        <img src={img} alt="site logo"/>
                        <b>Social Network on ReactJs</b>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;