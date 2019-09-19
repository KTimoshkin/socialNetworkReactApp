import React from 'react';
import './App.sass'
import HeaderContainer from './components/Header/HeaderContainer';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

const App = () => {
  return (
      <div className="app">
          <HeaderContainer></HeaderContainer>
            <div className="appWrapper">
                <Sidebar></Sidebar>
                <Content></Content>
            </div>
      </div>
  );
}

export default App;
