import React, { useState } from 'react'

const App = () => {
  const[demo, setDemo]=useState({user:'kamal', age:30})
   
  const advancedemo=()=>{
    const newcpy={...demo}
    
    newcpy.user='mohan' 
    newcpy.age=90
        setDemo(newcpy)
  }
    

  return (
    <div>
      <h2>{demo.user},{demo.age}</h2>
      <button onClick={advancedemo}> click me!</button>   

    </div>
  )
}

export default App


