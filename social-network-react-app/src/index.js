import React from 'react';
import ReactDOM from 'react-dom';
import state from './assets/js/services/state';
import {BrowserRouter} from 'react-router-dom';
import {addPost, updateInputText, subscribe} from './assets/js/services/state';
import App from './assets/js/App';

let rerenderEntireTree = (state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateInputText={updateInputText}/>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);