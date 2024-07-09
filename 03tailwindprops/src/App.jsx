import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/Card'

function App() {

  let myObject = {
    name: "Lokesh",
    age: 21
  }

  let newArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-orange-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card
      username = "Chaiaurcode" userdetails = "Chai aur code se padhenge react ham toh"
      btnText="Click kar na bhaii"
      />
      <Card username = "HiteshChoudhary" userdetails = "And I will study from HiteshChoudhary {proper english coding} " btnText = "Click me bruh"/>
    </>
  )
}

export default App
