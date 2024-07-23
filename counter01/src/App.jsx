import { useState } from 'react';
import './App.css'

function App() {


  const numbers = [1, 2, 3, 4, 5];

// Define a callback function
function square(number) {
    return number * number;
}

// Use the map method with the callback function
const squaredNumbers = numbers.map(square);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
    }
  }

  const subtractValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Hello Coders</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Increase Value:{counter}</button>
      <br />
      <button onClick={subtractValue}>Decrease Value:{counter}</button>
    </>
  )
}

export default App
