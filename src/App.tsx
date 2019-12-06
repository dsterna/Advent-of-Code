import React from 'react';
import './App.css';
import initialData from './input/1.json';
/**
|--------------------------------------------------
- D directly orbits C and indirectly orbits B and COM, a total of 3 orbits.
- L directly orbits K and indirectly orbits J, E, D, C, B, and COM, a total of 7 orbits.
- COM orbits nothing.

|         G - H       J - K - L
       /           /
COM - B - C - D - E - F
               \
                I
|--------------------------------------------------

B)  C       c->B +1 nya tar förälderns relationer  D->C+1 (+1)
C)  D
D)  E
E)  F
B)  G
G)  H
D)  I
E)  J
J)  K
K)  L

*/
type orbit =  {
  name: string
  count: number
}

export interface IArray extends Array<orbit> { }

const App: React.FC = () => {
  let data = [...initialData];
  console.log('data', data);
  let orbits:IArray = data.map(elem => {return {name: elem.split(')')[0], count: 0}});

console.log(orbits);

  data.forEach((elem, index) => {
    let first = elem.split(')')[0];
    let sec = elem.split(')')[1];
    console.log('sec', sec);

   console.log(
     "hej", orbits.find(elem => (sec === elem.name )));

  })



  return (
    <div className="App">
    </div>
  );
}
export default App;
