import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="appWrapper">
      <Header></Header>
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
}

export default App;
