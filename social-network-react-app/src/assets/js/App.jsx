import React from 'react';
import '../sass/App.sass'
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
                    state={props.state}
                    dispatch={props.dispatch}
                ></Content>
            </div>
      </div>
  );
}

export default App;
