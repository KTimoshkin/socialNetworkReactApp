import React, {Component} from 'react';
import Styles from './Dialogues.module.sass';
import Dialog from './Dialog/Dialog'

export default class Dialogues extends Component{
    render() {
        let dialoguesData = [
            {id: 1, dialogMessage: "Yo"},
            {id: 2, dialogMessage: "Wuzup"},
            {id: 3, dialogMessage: "Hommi"}
        ];

        let dialoguesElements = dialoguesData.map((element) => {
            return(
                <Dialog
                    dialogMessage={element.dialogMessage}
                ></Dialog>
            );
        });

        return(
            <div className={Styles.dialogues}>
                {dialoguesElements}
            </div>
        );
    }
}