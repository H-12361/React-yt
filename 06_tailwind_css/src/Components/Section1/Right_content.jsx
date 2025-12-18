import React from 'react'
import Rightcard from './Rightcard'

const Right_content = (props) => {
   console.log(props.users)
  
  return (
    <div id='right' className='shrink flex gap-20 h-[90%] justify-between w-full p-10 overflow-x-auto' >
      {props.users.map(function(elem,idx){
        return <Rightcard  key={idx} id={idx} color={elem.color} Image={elem.Image} Tag={elem.Tag}/>
      })}
    </div>
  )
}

export default Right_content
