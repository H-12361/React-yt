import React from 'react'
import Left_content from './Left_content'
import Right_content from './Right_content'
function Page1_content(props) {


  return (
    <div className=' w-100% h-[90vh] iteam-center flex gap-10 px-10 py-8'>
    <Left_content/>
    <Right_content  users={props.users}/>
    </div>
  )
}

export default Page1_content
