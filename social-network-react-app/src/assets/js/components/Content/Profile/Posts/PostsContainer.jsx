import React, {Component} from 'react';
import Posts from './Posts'
import {addPostActionCreator, onInputPostTextActionCreator} from "../../../../services/profileReducer";
import StoreContext from "../../../../services/storeContext";

export default class PostsContainer extends Component{
    render() {
        return(
            <StoreContext.Consumer>
                {(store) => {
                    let state = store.getState();

                    let inputPostText = (newPostText) => {
                        store.dispatch(onInputPostTextActionCreator(newPostText))
                    };

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    return (
                        <Posts
                            postsData={state.ProfilePage.postsData}
                            inputText={state.inputPostText}
                            inputPostText={inputPostText}
                            addPost={addPost}
                        ></Posts>
                    );
                }
            }
            </StoreContext.Consumer>
        );
    }
}