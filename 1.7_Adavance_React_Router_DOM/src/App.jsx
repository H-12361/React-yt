import React from 'react'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import { Routes,Route} from 'react-router-dom'
import Contact from './Pages/Contact'
import Universal_page from './Pages/Universal_page'
import Product from './Pages/Product'
import Men_collection from './Pages/Men_collection'
import Women from './Pages/Women'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route  path='/Home' element={<Home/>}/>
        <Route  path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Product' element={<Product/>} >
         <Route path='Men' element={<Men_collection/>} />
          <Route path='Women' element={<Women/>} />
        
        </Route>
       
        <Route  path='*' element={<Universal_page/>}/>

      </Routes>
     
      <Footer/>
    </div>
  )
}

export default App
