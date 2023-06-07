import React from 'react'
import logo from '../assets/imgs/tvlogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='nav-left'>
        <img src={logo} alt='logo'/>
       <Link to="/"> <h3>Book My Show</h3> </Link>
      </div>
    </div>
  )
}

export default Navbar
