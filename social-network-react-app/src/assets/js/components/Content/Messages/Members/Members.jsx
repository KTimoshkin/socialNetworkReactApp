import React, {Component} from 'react';
import Styles from './Members.module.sass';
import Member from './Member/Member'

export default class Members extends Component{
    render() {
        let membersData = [
            {id: 1, memberSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/MarkZuckerberg-crop.jpg/210px-MarkZuckerberg-crop.jpg", memberName: "Mark Zuckerberg"},
            {id: 2, memberSrc: "http://ki.ill.in.ua/m/670x450/24422730.jpg", memberName: "Pavel Durov"},
            {id: 3, memberSrc: "https://www.searchengines.ru/wp-content/uploads/2018/07/google-sergey-brin-9982.jpg", memberName: "Sergey Brin"}
        ];

        let membersElements = membersData.map((element) => {
            return(
                <Member
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
}