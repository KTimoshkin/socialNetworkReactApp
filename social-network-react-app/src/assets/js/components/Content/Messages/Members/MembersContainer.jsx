import React from 'react';
import Members from './Members';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        membersData: state.MessagesPage.membersData
    }
};

export default connect(mapStateToProps)(Members);