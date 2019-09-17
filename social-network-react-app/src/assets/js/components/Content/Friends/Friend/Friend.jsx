import React from 'react';
import Styles from './Friend.module.sass'

const Friend = (props) => {
    return(
        <div className={Styles.friend}>
            <p>{props.fullname}</p>
            <p>{props.status}</p>
            <p>{props.location.city}</p>
            <p>{props.location.country}</p>
            {props.followed
                ? <button onClick={() => props.unfollow(props.userId)}>Отписаться</button>
                : <button onClick={() => props.follow(props.userId)}>Подписаться</button>
            }
        </div>
    );
}

export default Friend;