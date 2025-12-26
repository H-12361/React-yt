import React, { useState } from 'react'

function App() {
 
   const[num, setNum]=useState(0);

   function IncreaseNum(){
    setNum(num+1)

   }
   function DecreaseNum(){
    setNum(num-1)
   }



  return (
    <div>
      <h2>{num}</h2>
      <button onClick={IncreaseNum}>Increase</button>
      <button onClick={DecreaseNum}> Decrease</button>

    </div>
  )
}

export default App
