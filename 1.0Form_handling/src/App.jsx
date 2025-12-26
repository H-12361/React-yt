import React from 'react'

function datasubmit(e){
  e.preventDefault()
  console.log("data submit");
}

const App = () => {
  return (
    <div>
      {/* here e used to prevent to submit default behaviour */}
      <form onSubmit={(e)=>{  
        datasubmit(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
