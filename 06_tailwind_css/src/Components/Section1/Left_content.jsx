import React, { Fragment } from 'react'
import 'remixicon/fonts/remixicon.css'
import Herotext from './Herotext'
import Arrow from './Arrow'

function Left_content() {
  return (
    <Fragment>
           <div className='h-[90%]  flex flex-col justify-between p-10  w-3/7 ' >
         
        <Herotext/>
       <Arrow/>
         </div>
    </Fragment>
  )
}

export default Left_content
