import React from 'react';
import Styles from './Profileinfo.module.sass'

const Profileinfo = () => {
    return(
        <div className={Styles.profileinfo} style={{ backgroundImage: "url('http://dgdesign.ru/uploads/posts/2019-02/1549455082_shapka-sayta-vesna-1151132.jpg')"}}>
            <div className={Styles.logo}>
                <img src="https://amp.businessinsider.com/images/5b9235bb5c5e5254548b59f5-750-563.jpg" alt="profile logo"/>
            </div>
            <div className={Styles.title}>
                <h1>Konstantin Timoshkin</h1>
                <small> Kazan, 24 y.o.</small>
            </div>
        </div>
    );
}

export default Profileinfo;