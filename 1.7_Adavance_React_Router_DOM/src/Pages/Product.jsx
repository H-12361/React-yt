import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className=' flex px-4 py-4 justify-center gap-6 text-2xl'>
         <Link to='/Product/Men'   >Men</Link>
         <Link to="/Product/Women">Women</Link>
        </div>
       
<Outlet/>
    </div>
  )
}

export default Product
