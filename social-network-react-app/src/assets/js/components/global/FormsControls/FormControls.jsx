import React from 'react';
import Styles from './FromsControls.module.sass'

export const Textarea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return(
        <>
            {hasError && <span className={Styles.errorMessage}>{meta.error}</span>}
            <textarea
                className={Styles.textarea + " " + (hasError ? Styles.error : "")}
                {...input} {...props}
            ></textarea>
        </>
    );
};

export const Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return(
        <>
            {hasError && <span className={Styles.errorMessage}>{meta.error}</span>}
            <input
                className={Styles.input + " " + (hasError ? Styles.error : "")}
                {...input} {...props}
            ></input>
        </>
    );
}