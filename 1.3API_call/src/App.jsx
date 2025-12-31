import React, { useState } from 'react'
import axios from 'axios'
// using fetch method call api we can use axios also to call api it is third party library
//  function App() {
//   async function getdata(){
//   const response=  await fetch ('https://jsonplaceholder.typicode.com/todos/1')
//    console.log(response)

// }


 
// using axios
function App() {
const[data ,setData]=useState([])
const  getdata= async()=>{
   const response= await axios.get('https://picsum.photos/v2/list') 
    // here we stored the data into blank array
  setData(response.data);
}


  return (
    <div>
       <button onClick={getdata}> click me!</button>

       <div> {data.map(function(elem, idx){
           
           return <h1>{idx} {elem.author} </h1>
       })}</div>
    </div>
  )
}


export default App
