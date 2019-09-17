import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './Member.module.sass';

const Member = (props) => {
    return(
        <div className={Styles.member}>
            <NavLink to={`/messages/${props.id}`} activeClassName={Styles.active}>
                <div>
                    <img src={props.memberSrc} alt=""/>
                </div>
                <div className={Styles.memberName}>
                    {props.memberName}</div>
            </NavLink>
        </div>
    );
}

export default Member;