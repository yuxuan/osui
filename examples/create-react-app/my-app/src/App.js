import React from 'react';
import {Button} from 'antd';
import logo from './logo.svg';
import './App.less';
import '@osui/theme/dist/theme/vars.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;
