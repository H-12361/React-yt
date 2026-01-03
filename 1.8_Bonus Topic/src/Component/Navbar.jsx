import React from 'react'
import { useState } from 'react'


const Navbar = (props) => {
   //here we can change data child to parent 

    function changeTheme(){
        console.log('theme change',theme)
        props.setTheme('gray')
    }
    
  return (
    <div>
        
     <button onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default Navbar
