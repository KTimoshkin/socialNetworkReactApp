import React, {Component} from 'react';
import Styles from './Members.module.sass';

export default class Members extends Component{
    render() {
        return(
            <div className={Styles.members}>
                Тут сообщения
            </div>
        );
    }
}