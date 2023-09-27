import React from 'react'
import Navbar from '../Navbar/Navbar';
import {Outlet} from 'react-router-dom'
import './layout.css'

const Layout = () => {
  return (
    <>
    <Navbar/>
   
    <div className='layoutPage'>
        <Outlet/>
    </div>

    <footer className='footer'>
      <p>
        
        This is Footer
        </p>
    </footer>
    
    </>
  )
}

export default Layout