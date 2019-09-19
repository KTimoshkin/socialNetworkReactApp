import React from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './Friend.module.sass'
import img from '../../../../../img/user-photo.png'
import {friendsAPI} from "../../../../api/api";
import Button from "../../../global/Button/Button";

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
                            friendsAPI.unfollow(props.id).then(response => {
                                if (response.data.resultCode == 0){
                                        props.unfollow(props.id)
                                    }
                                });
                            }
                        }
                    ></Button>
                    : <Button
                        btnText="Follow"
                        btnOnClick={() => {
                            friendsAPI.follow(props.id).then(response => {
                                if (response.data.resultCode == 0){
                                    props.follow(props.id)
                                }
                            });
                        }
                    }
                    ></Button>
                }
            </div>
        </div>
    );
}

export default Friend;