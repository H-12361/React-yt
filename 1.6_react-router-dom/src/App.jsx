import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/Contact' element={<Contact/>}  />
         <Route path='/About' element ={<About/>} />
      </Routes>
    </div>
  )
}

export default App
