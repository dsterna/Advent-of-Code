import React from 'react';
import logo from './logo.svg';
import './App.css';
import initialData from './input/1.json'
const App: React.FC = () => {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      let data = [...initialData];
      data[1] = i;
      data[2] = j;
      for (let index = 0; index < data.length; index++) {
        let newInt = 0;
        let keepGoing = true;
        if (index % 4 === 0) {
          switch (data[index]) {
            case 1:
              newInt = data[data[index + 1]] + data[data[index + 2]]
              break;
            case 2:
              newInt = data[data[index + 1]] * data[data[index + 2]]
              break;
            case 99:
              keepGoing = false;
              break;
          }
          if (!keepGoing) {
            break;
          }
          data[data[index + 3]] = newInt;
          if (data[0] === 19690720) {
            console.log('here i am', "i", i, "j", j);
          }
        }
      }
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
