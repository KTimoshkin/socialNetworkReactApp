import React from 'react';
import './App.sass'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App(props) {
  return (
      <div className="app">
          <Header></Header>
            <div className="appWrapper">
                <Sidebar></Sidebar>
                <Content
                    store={props.store}
                ></Content>
            </div>
      </div>
  );
}

export default App;
