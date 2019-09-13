import React, {Component} from 'react';
import Styles from './Messages.module.sass';
import Members from './Members/Members'
import Dialogues from './Dialogues/Dialogues';

export default class Messages extends Component{
    render() {
        return(
            <div className={Styles.messages}>
                <Members membersData={this.props.messagePage.membersData}></Members>
                <Dialogues dialoguesData={this.props.messagePage.dialoguesData} dispatch={this.props.dispatch}></Dialogues>
            </div>

        );
    }
}