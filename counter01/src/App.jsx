import { useState } from 'react';
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
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
      <button onClick={addValue}>Increase Value</button>
      <br />
      <button onClick={subtractValue}>Decrease Value</button>
    </>
  )
}

export default App
