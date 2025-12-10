import { useState } from 'react'
import './App.css'
import Hero from './Component/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* //here send the props and recive in your main Component */}
      <div className="continer">
        <Hero user='kamal'img='https://images.unsplash.com/photo-1764703495178-3052c023eeba?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Hero user='Arun ' img ='https://images.unsplash.com/photo-1764183297985-34e3e024f68c?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

      </div>
      
      
    </>
  )
}

export default App
