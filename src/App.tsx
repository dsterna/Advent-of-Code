import React from 'react';
import './App.css';
import initialData from './input/three.json';
const App: React.FC = () => {
  let data = [...initialData];
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <p>
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
