import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='navheader'  >

      <nav className='nav'>
        <div className='navlogo'>
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg" alt="log" />
        </div>
        <div className='navLinks'>
          <ul>
            <li>
              <Link to={"home"}>Home</Link>
              
            </li>
            <li>
              <Link to={"pictures"}>pictures</Link>
              
            </li>
            <li>
            <Link to={"contactus"}>ContactUs</Link>
            </li>
            <li>
            <Link to={"buildings"}>Designs</Link>
            </li>
           
            <li>
            <Link to={"/signup"}>Signup</Link>
            </li>
            <li>
            <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar