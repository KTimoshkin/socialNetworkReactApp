import React, {Component} from 'react';
import Styles from './Members.module.sass';
import Member from './Member/Member'

export default class Members extends Component{
    membersElements = this.props.membersData.map((element) => {
        return(
            <Member
                id={element.id}
                memberSrc={element.memberSrc}
                memberName={element.memberName}
            ></Member>
        );
    });

    render() {
        return(
            <div className={Styles.members}>
                {this.membersElements}
            </div>
        );
    }
}