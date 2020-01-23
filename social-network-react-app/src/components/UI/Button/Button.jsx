import React from 'react';
import Styles from './Button.module.sass'

const Button = (props) => {
    return(
        <button className={Styles.btn} onClick={props.btnOnClick}>{props.btnText}</button>
    );
}

export default Button;