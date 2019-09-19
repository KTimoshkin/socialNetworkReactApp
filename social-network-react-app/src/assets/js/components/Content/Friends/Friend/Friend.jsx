import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './Friend.module.sass'
import img from '../../../../../img/user-photo.png'

const Friend = (props) => {
    return(
        <div key={props.key} id={props.id} className={Styles.friend}>
            <NavLink to={`/profile/${props.id}`}>
                <div className={Styles.friendLogo}>
                    <img src={ props.photos != null ? props.photos : img} alt=""/>
                </div>
                <div className={Styles.friendInfo}>
                    <h1>{props.name}</h1>
                    <p>{props.status != null ? props.status : "Status is null"}</p>
                </div>
            </NavLink>
            <div className={Styles.friendFollowBtn}>
                {props.followed
                    ? <button onClick={() => props.unfollow(props.id)}>Unfollow</button>
                    : <button onClick={() => props.follow(props.id)}>Follow</button>
                }
            </div>
        </div>
    );
}

export default Friend;