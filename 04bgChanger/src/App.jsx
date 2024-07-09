import { useState } from "react"

function App() {
   let [color , setColor] = useState("olive")


  return (
        <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
               
               <div className="fixed flex flex-wrap justify-center top-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white rounded-xl px-2 py-3">
                  <button 
                  className=" px-6 py-2 outline-none rounded-full text-white"
                  style={{backgroundColor: "red"}}
                  onClick={() => setColor("red")}
                  >Red</button>

                  <button 
                  className=" px-6 py-2 rounded-full outline-none text-white shadow-lg" style={{backgroundColor: "green"}}
                  onClick={() => setColor("green")}
                  >Green</button>
                  
                  <button 
                  className=" px-6 py-2 rounded-full outline-none text-white" 
                  style={{backgroundColor: "blue"}}
                  onClick={() => setColor("blue")}>Blue</button>
                  
                  <button
                  className=" px-6 py-2 rounded-full outline-none text-white" 
                  style={{backgroundColor: "black"}}
                  onClick={() => setColor("black")}
                  >Black</button>
                  
                  <button 
                  className=" px-6 py-2 rounded-full outline-none text-black" 
                  style={{backgroundColor: "yellow"}}
                  onClick={() => setColor("yellow")}
                  >Yellow</button>
                  
                  <button
                  className=" px-6 py-2 rounded-full outline-none text-white"
                  style={{backgroundColor: "purple"}}
                  onClick={() => setColor("purple")}
                  >Purple</button>
                  
                  <button
                  className=" px-6 py-2 rounded-full outline-none text-white"
                  style={{backgroundColor: "olive"}}
                  onClick={() => setColor("olive")}
                  >Olive</button>
                  
                  <button
                  className=" px-6 py-2 rounded-full outline-none text-white"
                  style={{backgroundColor: "gray"}}
                  onClick={() => setColor("gray")}
                  >Gray</button>
                  
                  <button
                  className=" px-6 py-2 rounded-full outline-none text-black"
                  style={{backgroundColor: "pink"}}
                  onClick={() => setColor("pink")}
                  >Pink</button>

                  <button
                  className=" px-6 py-2 rounded-full outline-none text-black"
                  style={{backgroundColor: "white"}}
                  onClick={() => setColor("white")}
                  >White</button>
                  

                  <button
                  className=" px-6 py-2 rounded-full outline-none text-black"
                  style={{backgroundColor: "#E6E6FA"}}
                  onClick={() => setColor("#E6E6FA")}
                  >Lavender</button>

                </div>
               </div>
        </div>          

  )
}

export default App
