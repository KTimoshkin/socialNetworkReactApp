import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import store from './assets/js/services/reduxStore';
import App from './assets/js/App';
import './assets/sass/index.sass'

let rerenderEntireTree = (state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
        let state = store.getState();
        rerenderEntireTree(state);
});