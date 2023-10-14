import { useEffect } from 'react';
import './App.css';
import React, { useState } from 'react';
import { useRef } from 'react';

function useIncNumber(number) {

  const [num, setNum] = useState(number)

  useEffect(() => {
    setNum(number + 1)

  }, [number])

  return num
}
function App() {
  // let count = 0;
  const myHeading = useRef(null)
  const [count, setCount] = useState(0)
  console.log("First", count);

  useEffect(() => {
    console.log("Effected!")
    console.log(myHeading);
    myHeading.current.innerHTML = "Nweewaqda"

  }, [])

  useEffect(() => {
    console.log("Count Effected!")

  }, [count])


  return (
    <div className="App">
      <h4 ref={myHeading}>Site Name</h4>
      <h3>Counter: {useIncNumber(count)}</h3>
      <button onClick={() => {
        setCount(count + 1);
        console.log("Inc", count);
      }}>Increment</button>
    </div>
  );
}

export default App;
