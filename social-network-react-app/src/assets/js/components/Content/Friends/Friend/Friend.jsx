import React from 'react';
import Styles from './Friend.module.sass'
import img from '../../../../../img/user-photo.png'

const Friend = (props) => {
    return(
        <div className={Styles.friend}>
            <img src={ props.photos != null ? props.photos : img} alt=""/>
            <p>{props.fullname}</p>
            <p>{props.status}</p>
            {props.followed
                ? <button onClick={() => props.unfollowFriend(props.userId)}>Отписаться</button>
                : <button onClick={() => props.followFriend(props.userId)}>Подписаться</button>
            }
        </div>
    );
}

export default Friend;