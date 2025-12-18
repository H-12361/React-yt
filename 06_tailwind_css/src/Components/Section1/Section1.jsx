import React from 'react'
import Navbar from './Navbar'
import Page1_content from './Page1_content'

function Section1(props) {

  return (
    <div >
     <Navbar/>
     <Page1_content users={props.users}/>
      
    </div>
  )
}

export default Section1
