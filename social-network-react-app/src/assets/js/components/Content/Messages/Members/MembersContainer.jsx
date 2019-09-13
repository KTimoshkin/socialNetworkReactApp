import React, {Component} from 'react';
import Members from './Members';
import StoreContext from "../../../../services/storeContext";

export default class MembersContainer extends Component{
    render() {
        return(
            <StoreContext.Consumer>
                {(store) => {
                    let state = store.getState();
                    return (
                        <Members membersData={state.MessagesPage.membersData}></Members>
                    );
                }
            }
            </StoreContext.Consumer>
        );
    }
}