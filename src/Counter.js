import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function Counter() {
   const [count, setCount] = useState(0)
   const [mood, setMood] = useState(true)
  return (
    <div className="App">
        <button onClick={() => {setCount(count+1)}}>The value is {count}</button>
  <button onClick={() => {setMood(!mood)}}>The mood is {mood ? ':)' : ':('}</button>
    </div>
  );
}

export  default Counter;
