import React,{useState} from 'react';
import './App.css';

function App() {
  const[count,setCount]=useState(0);
  return (
    <React.Fragment>
      <p>You clicked {count} times </p>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
     
    </React.Fragment>
   
  );
}

export default App;