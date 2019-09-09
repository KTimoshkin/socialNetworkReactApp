import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="app">
      <Header></Header>
        <div className="appWrapper">
            <Sidebar></Sidebar>
            <Content></Content>
        </div>
    </div>
  );
}

export default App;
