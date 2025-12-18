import React from 'react'

function Right_Card_Content(props) {
  console.log(props.color)
  return (
    <div>
       <div>
             <p className='text-2xl leading-normal pb-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis repudiandae repellat.</p>
             <div className='flex justify-between p-1'>
             <button  style={{backgroundColor:props.color}} className='text-white rounded-2xl ' >{props.Tag}</button>
             <button className='bg-blue-500 px-4 py-3  text-white rounded-2xl' > <i className="ri-arrow-right-line"></i></button>
              </div>
              </div>
    </div>
  )
}

export default Right_Card_Content
