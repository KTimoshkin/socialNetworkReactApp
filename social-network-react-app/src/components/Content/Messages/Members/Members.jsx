import React from 'react';
import Styles from './Members.module.sass';
import Member from './Member/Member'

const Members = (props) => {
    let membersElements = props.membersData.map((element) => {
        return(
            <Member
                key={element.id}
                id={element.id}
                memberSrc={element.memberSrc}
                memberName={element.memberName}
            ></Member>
        );
    });

    return(
        <div className={Styles.members}>
            {membersElements}
        </div>
    );
}

export default Members;