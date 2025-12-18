import React, { Fragment } from 'react'
import Right_Card_Content from './Right_Card_Content'

function Rightcard(props) {
  return (
    <>

   
    <div className='h-full shrink-0 overflow-hidden rounded-3xl relative bg-amber-950 w-100  '>
      <img className='h-full w-full object-fit' src={props.Image} />
       <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-between  p-10 '>
        <h1 className='h-10 w-10 bg-amber-50 items-center justify-center flex rounded-full'>{props.id+1}</h1>
    <Right_Card_Content id={props.id } color={props.color} Tag={props.Tag}/>
    </div>
    </div>
   
     </>
  )
}

export default Rightcard
