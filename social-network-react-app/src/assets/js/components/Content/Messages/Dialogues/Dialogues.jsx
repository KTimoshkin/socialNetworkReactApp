import React, {Component} from 'react';
import Styles from './Dialogues.module.sass';
import Dialog from './Dialog/Dialog'

export default class Dialogues extends Component{
    dialoguesElements = this.props.dialoguesData.map((element) => {
        return(
            <Dialog
                dialogMessage={element.dialogMessage}
            ></Dialog>
        );
    });

    render() {
        return(
            <div className={Styles.dialogues}>
                {this.dialoguesElements}
            </div>
        );
    }
}