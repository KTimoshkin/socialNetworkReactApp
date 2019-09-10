import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Styles from './Member.module.sass';

export default class Member extends Component{
    render() {
        return(
            <div className={Styles.member}>
                <NavLink to={`/messages/${this.props.id}`} activeClassName={Styles.active}>
                    <div>
                        <img src={this.props.memberSrc} alt=""/>
                    </div>
                    <div className={Styles.memberName}>
                        {this.props.memberName}
                    </div>
                </NavLink>
            </div>
        );
    }
}