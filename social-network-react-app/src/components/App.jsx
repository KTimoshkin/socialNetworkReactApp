import React from 'react';
import './App.sass'
import HeaderContainer from './Header/HeaderContainer';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

const App = () => {
  return (
      <div className="app">
          <HeaderContainer />
            <div className="appWrapper">
                <Sidebar />
                <Content />
            </div>
      </div>
  );
}

export default App;
