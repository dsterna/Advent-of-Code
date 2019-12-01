import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './input/1.json'
import { number } from 'prop-types';
import { endianness } from 'os';


/* OK */

const App: React.FC = () => {
  function foo(v: string) { return 'foo'; }
  function hejsan(num: number) {
    return Math.floor(num / 3) - 2;

  }
  let sum = 0;
  data.map(num => {
    let hej = hejsan(num);
    sum+=hej;
    while (hej > 0) {
      hej = hejsan(hej)
      if(hej > 0){
        sum += hej;
        console.log("num: ", num, "calc: ", hej, "sum: ", sum )
      }
      
    }
  })
  console.log('sum', sum);
  // data.map(num => {
  //   num = 1969;
  //   let hej =1;
  //   while(hej > 0){
  //     let hej =hejsan(num);
  //     sum+=hej;
  //     console.log("num: ", num, "calc: ", hej, "sum: ", sum )
  //   }
  //   return;

  // })
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
