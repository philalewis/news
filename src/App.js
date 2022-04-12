import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [ news, setNews ] = useState([])

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`)
    .then(response => response.json())
    .then(data => setNews(data.results))
  }, [])

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
