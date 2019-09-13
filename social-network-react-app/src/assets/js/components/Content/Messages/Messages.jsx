import React, {Component} from 'react';
import Styles from './Messages.module.sass';
import MembersContainer from './Members/MembersContainer'
import DialoguesContainer from './Dialogues/DialoguesContainer';

export default class Messages extends Component{
    render() {
        return(
            <div className={Styles.messages}>
                <MembersContainer store={this.props.store}></MembersContainer>
                <DialoguesContainer store={this.props.store}></DialoguesContainer>
            </div>

        );
    }
}