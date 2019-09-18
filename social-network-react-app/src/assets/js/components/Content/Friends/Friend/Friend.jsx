import React from 'react';
import Styles from './Friend.module.sass'
import img from '../../../../../img/user-photo.png'

const Friend = (props) => {
    return(
        <div key={props.key} id={props.id} className={Styles.friend}>
            <img src={ props.photos != null ? props.photos : img} alt=""/>
            <p>{props.name}</p>
            <p>{props.status != null ? props.status : "Status is null"}</p>
            {props.followed
                ? <button onClick={() => props.unfollow(props.id)}>Unfollow</button>
                : <button onClick={() => props.follow(props.id)}>Follow</button>
            }
        </div>
    );
}

export default Friend;