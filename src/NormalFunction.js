import React,{useState} from 'react';
import './App.css';

function App() {
  let count=0;
  const handleClick=()=>{
    count++;
    console.log(`count is now ${count}`)
  }
  return (
    <React.Fragment>
      <p>You clicked {count} times </p>
      <button onClick={handleClick}>Click Me</button>
     
    </React.Fragment>
   
  );
}