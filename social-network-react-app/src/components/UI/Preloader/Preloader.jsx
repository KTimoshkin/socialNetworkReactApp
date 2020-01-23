import React from 'react';
import Styles from './Preloader.module.sass'
import loader from '../../../assets/img/loader.gif';

const Preloader = (props) => {
    return(
        <div className={Styles.preloader}>
            <img src={loader}/>
        </div>
    );
}

export default Preloader;