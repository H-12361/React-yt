import React from 'react'
import Section1 from './Components/Section1/Section1'


const App = () => {
  const users=[
    {
    Image:'https://plus.unsplash.com/premium_photo-1661592917784-b5a9acee29ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Intro:'',
    color: 'aquamarine',
     Tag:'Satisfied'
  },
  {
    Image:'https://plus.unsplash.com/premium_photo-1661756922132-d77669c16a56?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Intro:'',
    
    color: 'coral',
     Tag:'Under Served'
  },
  {
    Image:'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    Intro:'',
    color: 'darkslateblue',
    Tag:'Underbanked'
  },
  {
    Image:'https://plus.unsplash.com/premium_photo-1666299431817-510aabd51863?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',    Intro:'',
    color:'Red',
    Tag:'Underbanked'
  }
]
  return (
    <div>
      <Section1 users={users}/>
      
    </div>
  )
}

export default App
