import React, {Component} from 'react';
import Styles from './Profileinfo.module.sass'

export default class Profileinfo extends Component{
    render() {
        return(
            <div className={Styles.profileinfo} style={{ backgroundImage: "url('http://dgdesign.ru/uploads/posts/2019-02/1549455082_shapka-sayta-vesna-1151132.jpg')"}}>
                <div className={Styles.logo}>
                    <img src="https://amp.businessinsider.com/images/5b9235bb5c5e5254548b59f5-750-563.jpg" alt="profile logo"/>
                </div>
                <div className={Styles.title}>
                    <h1>Konstantin Timoshkin</h1>
                </div>
            </div>
        );
    }
}