import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import './NewLayout.css';

const NewLayout = () => {
  return (
    <>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/SignUp">Sign Up</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </nav>  
        <Outlet></Outlet>
      </>
  )
}

export default NewLayout
