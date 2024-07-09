import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  


  // let counter = 0

  const addValue = () => {
    // counter = counter + 1;
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0 ){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      
      <button 
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value </button>
      <p>footer: </p>
    </>
  )
}

export default App
