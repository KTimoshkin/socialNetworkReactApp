import React from 'react';
import './App.sass'
import HeaderContainer from './Header/HeaderContainer';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

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
