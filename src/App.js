import React from 'react';
import funny from './funny.svg';
import './App.css';
import CalculatorTrial1 from './CalculatorTrial1.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={funny} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.facebook.com/gilbertoe.choy?ref=bookmarks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to look at handsome
        </a>
        <CalculatorTrial1/>
      </header>
    </div>
  );
}

export default App;
