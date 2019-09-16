import React from 'react';
import Members from './Members';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        membersData: state.MessagesPage.membersData
    }
};

const MembersContainer = connect(mapStateToProps)(Members);

export default MembersContainer;