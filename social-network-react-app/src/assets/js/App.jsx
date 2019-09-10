import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="app">
      <Header></Header>
        <div className="appWrapper">
            <Router>
                <Sidebar></Sidebar>
                <Content></Content>
            </Router>
        </div>
    </div>
  );
}

export default App;
