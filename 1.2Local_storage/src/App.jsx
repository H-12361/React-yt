import React from 'react'

function App() {
  // notes
// localStorage 
// localStorage.getItem === it is used to get the save thing
// localStorage.setItem == this method use to set tha data in local Storage
// localStorage.clear== it is  used to clear the msg into the localStorage
 // JSON.stringify == this method used to read the String data suppose you send the data in object form without this method we can't read the data
 // JSON.parse == this method is used to parse the message same formate or previous formate



    // const trydata=({
    //   name:'henas',
    //   age:53,
    //   gender:'female',
    // });
    // localStorage.setItem ('trydata', JSON.stringify(trydata))


    const trydata=localStorage.getItem('trydata')
    console.log(typeof(trydata))
  return (
    <div >

      App
      
    </div>
  )
}

export default App 
