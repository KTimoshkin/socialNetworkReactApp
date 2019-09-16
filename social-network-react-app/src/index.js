import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import store from './assets/js/services/reduxStore';
import App from './assets/js/App';
import './assets/sass/index.sass'
import {Provider} from "react-redux";

let rerenderEntireTree = ()=> {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree();
store.subscribe(() => {
        rerenderEntireTree();
});