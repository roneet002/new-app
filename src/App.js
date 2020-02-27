import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Pereson/Person'

function App() {
  return (
    <div className="App">
      <Person />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {5+5}
        </a>
      </header>
    </div>
  );
}

export default App;
