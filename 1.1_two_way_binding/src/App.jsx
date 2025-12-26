import React, { useState } from 'react'

function App() {
  const[Title,setTile]=useState('')
  
const submithandler= (e)=>{
  e.preventDefault() 
  console.log("Form submited by ",Title);

  //  used settitle again blank the value to input filed blank
  setTile('')


 }


  return (
    <div >
      <form onSubmit={(e)=>{
        submithandler(e)
        }} >
       <input type="text" placeholder='Enter text' value={Title} onChange={(e)=>{
        setTile(e.target.value)
       }}
       />
        <button>click!</button>
      </form>
    </div>
  )
}

export default App
