import React from 'react'
import {Bookmark} from 'lucide-react';

function Card(props) {
  console.log(props.company)
  return (
    <div>
       <div className='card'>
        <div className="top">
          <img src={props.brandLogo} alt="" />
          
          <button>Save<Bookmark size={12}/></button>
         
        </div>
        <div className='center'>
          <p>{props.company} <span>{props.post}</span></p> 
          <h3>Senior UI/UX Designer</h3>
          <div className="tag">
             <h4 className='partone'>{props.tag1} </h4>
             <h4 className='parttwo'>{props.tag2}</h4>
          </div>
         
        </div>
        <hr />
        <div className="bottom">
         <div>
            <h4>{props.pay}</h4>
            <p>{props.location}</p>
         </div>
             <button> Apply now</button>
        </div>
        
      </div>
    </div>
  )
}

export default Card
