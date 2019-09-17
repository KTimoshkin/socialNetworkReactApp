import React from 'react';
import Styles from './Dialog.module.sass';

const Dialog = (props) => {
    return(
        <div className={Styles.dialog}>
            {props.dialogMessage}
            </div>
    );
}

export default Dialog;