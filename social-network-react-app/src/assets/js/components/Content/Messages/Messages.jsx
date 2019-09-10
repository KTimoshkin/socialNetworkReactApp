import React, {Component} from 'react';
import Styles from './Messages.module.sass';
import Members from './Members/Members'
import Dialogues from './Dialogues/Dialogues';

export default class Messages extends Component{
    render() {
        return(
            <div className={Styles.messages}>
                <Members></Members>
                <Dialogues></Dialogues>
            </div>

        );
    }
}