import React from 'react';
import { highlighter } from "@codemirror/next/highlight";
import logo from './logo.svg';
import './App.css';

export function myHighlighter() { // exported just not to be marked unused
  return highlighter({});
}

function App() {
  return (
    <div className="App">
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
        </a>
      </header>
    </div>
  );
}

export default App;
