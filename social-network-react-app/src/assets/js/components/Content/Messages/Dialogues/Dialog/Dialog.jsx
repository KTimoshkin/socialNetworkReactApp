import React, {Component} from 'react';
import Styles from './Dialog.module.sass';

export default class Dialog extends Component{
    render() {
        return(
            <div className={Styles.dialog}>
                {this.props.dialogMessage}
            </div>
        );
    }
}