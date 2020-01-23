import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './Friend.module.sass'
import img from '../../../../assets/img/icons/ic_userPlaceholder.png'
import Button from "../../../UI/Button/Button";

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
                    ? <Button
                        btnText="Unfollow"
                        btnOnClick={() => {
                            props.unfollow(props.id);}
                        }
                    />
                    : <Button
                        btnText="Follow"
                        btnOnClick={() => {
                            props.follow(props.id);}
                    }
                    />
                }
            </div>
        </div>
    );
}

export default Friend;