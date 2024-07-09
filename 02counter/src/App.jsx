import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  


  // let counter = 0

  const addValue = () => {
    // counter = counter + 1;
    if(counter < 20){
      setCounter(counter + 1)

/*
      // Ye ab saare ek jaisa hi kaam kar rahe hai toh yaha par diff algorithm of react wo dekhega ki yaha toh sab kuch same hi toh wo inn sabko ek hi batch mei bhejega and ek baar hi kaam karega..
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)   
      setCounter(counter + 1)  

      
       Yahaa ab isme change hoga kyuki yaha par wo har baar previous value lekar usme ek nayi value add kar raha hai .( kyuki yaha ek callback milta  hai (jo bhi last updated state hai uski toh wo uske andar value add karega.), like promise yaad hai na ek this hua fir next this , fir next this..... ) (kyuki callback se aata hai and uske baad ek call hoti hai and fir waha new value add)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)

      */

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
