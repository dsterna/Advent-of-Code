import React, { useState, useEffect } from "react";
import "./App.css";
import _ from 'lodash';

/**
|--------------------------------------------------
| It is a six-digit number.
  The value is within the range given in your puzzle input.
  Two adjacent digits are the same (like 22 in 122345).
  Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
|--------------------------------------------------
*/
// RANGE IS 137683-596253
/**
|--------------------------------------------------
| 111111 meets these criteria (double 11, never decreases).
  223450 does not meet these criteria (decreasing pair of digits 50).
  123789 does not meet these criteria (no double).
|--------------------------------------------------
*/
const App: React.FC = () => {
  const digitArray = (rangeNumber: number): number[] => {
    return ("" + rangeNumber).split("").map(function (t) { return parseInt(t) })
  }
  const countAdjacent = (ary: number[], position: number): boolean => {
    let count = 0;
    let digit = ary[position];
    for (let index = position + 1; index < ary.length; index++) {
      if (ary[index] === digit) {
        count++;
      }
      else
        break;
    }
    for (let index = position - 1; index >= 0; index--) {
      if (ary[index] === digit) {
        count++;
      }
      else
        break;
    }
    if ((count + 1) === 2) {
      return true;
    }
    return false;
  }

  const startInt: number = 137683;
  const endInt: number = 596253;
  let posiblePasswords: any[] = [];
  for (let nextIndex = 137683; nextIndex < endInt; nextIndex++) {
    let foundAdjecent = false;
    let neverDecrease = true;
    let testInt = nextIndex + 1;
    let ary: number[] = digitArray(testInt);
    ary.forEach((digit, index) => {
      if (index >= ary.length - 1) {
      }
      if (ary[index + 1] < digit) {
        neverDecrease = false;
        return
      }
      if (ary[index + 1] == digit) {
        if (countAdjacent(ary, index)) {
          foundAdjecent = true;
        };
      }
    })
    if (foundAdjecent && neverDecrease) {
      posiblePasswords.push(testInt)
    }
  }
  console.log('array', posiblePasswords);
  return (
    <div className="App">
    </div>
  );
};
export default App;
