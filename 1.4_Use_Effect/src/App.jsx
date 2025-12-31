import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function App() {
 const[a,setA]=useState(0);
 const[b,setB]=useState(10);

const achanging=()=>{
     console.log('A ki value change ho gayi')
 }
const bchanging=()=>{
  console.log('B ki value change ho gayi');
}


// useEffect are use to bipass the things if complete  main process exectuion then run this thinks [] he we pass dependency variable
  useEffect(function() {
    achanging()


  },[a])
   
  




  return (
    <div>
      <h1> value of A is {a}</h1>
      <h1>Value of B is {b}</h1>
      <button onClick={()=>{setA(a+1)}}>Change A</button>
      <button onClick={()=>{setB(b-1)}}>Change B</button>
     

    </div>
  )
}

export default App
