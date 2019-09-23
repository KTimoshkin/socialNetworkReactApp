import React from 'react';
import Styles from './Profileinfo.module.sass'
import Preloader from "../../../global/Preloader/Preloader";
import img from '../../../../../img/user-photo.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Profileinfo = (props) => {
    if (!props.profile){
        return <Preloader></Preloader>
    } else{
        return(
            <div className={Styles.profileinfo} style={{ backgroundImage: "url('http://dgdesign.ru/uploads/posts/2019-02/1549455082_shapka-sayta-vesna-1151132.jpg')"}}>
                {/*<div className={Styles.logo}>
                    <img src="https://amp.businessinsider.com/images/5b9235bb5c5e5254548b59f5-750-563.jpg" alt="profile logo"/>
                </div>
                <div className={Styles.title}>
                    <h1>Konstantin Timoshkin</h1>
                    <small> Kazan, 24 y.o.</small>
                </div>*/}

                <div className={Styles.logo}>
                    <img src={ props.profile.photos.large != null ? props.profile.photos.large : img} alt="profile logo"/>
                </div>
                <div className={Styles.title}>
                    <h1>{props.profile.fullName}</h1>
                    <ProfileStatus ></ProfileStatus>
                    <small>{props.profile.aboutMe != null ? props.profile.aboutMe : '"About me" is null'}</small>
                </div>
            </div>
        );
    }
}

export default Profileinfo;