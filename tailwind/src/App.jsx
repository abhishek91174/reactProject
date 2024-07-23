import { useState } from 'react'
import './App.css';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    name:"abhishek",
    age:23
  }

  let newArray=[1,2,3,4,5]

  return (
    <>
      <hi className="bg-yellow-400">hello reactjs</hi>

      <Card   username="chaiaurcode"  btnText=""/>
      <Card   username="amrit"  btnText="visit me"/>
    
    </>
  )
}

export default App
