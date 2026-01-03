import React from 'react'
import Navbar from './Component/Navbar'
import { useState } from 'react'

const App = () => {

  const[theme ,setTheme]=useState('yellow')
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar  theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
