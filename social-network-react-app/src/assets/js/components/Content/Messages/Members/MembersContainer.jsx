import React, {Component} from 'react';
import Members from './Members';

export default class MembersContainer extends Component{
    render() {
        return(
            <Members membersData={this.props.store.getState().MessagesPage.membersData}></Members>
        );
    }
}