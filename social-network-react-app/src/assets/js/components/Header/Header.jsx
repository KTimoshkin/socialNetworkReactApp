import React, {Component} from 'react';
import Styles from './Header.module.sass'

export default class Header extends Component{
    render() {
        return(
            <header>
                <div className={Styles.header}>
                    <div className={Styles.siteLogo}>
                        <a href="/" >
                            <img src="https://icons-for-free.com/iconfiles/png/512/design+development+facebook+framework+mobile+react+icon-1320165723839064798.png" alt="site logo"/>
                            <b>Social Network on ReactJs</b>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}