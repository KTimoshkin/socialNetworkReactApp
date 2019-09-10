import React, {Component} from 'react';
import Styles from './Dialogues.module.sass';

export default class Dialogues extends Component{
    render() {
        return(
            <div className={Styles.dialogues}>
                Тут отправители
            </div>
        );
    }
}