import React from 'react';
import Styles from './Messages.module.sass';
import MembersContainer from './Members/MembersContainer'
import DialoguesContainer from './Dialogues/DialoguesContainer';

const Messages = () => {
    return(
        <div className={Styles.messages}>
            <MembersContainer></MembersContainer>
            <DialoguesContainer></DialoguesContainer>
        </div>
    );
}

export default Messages;