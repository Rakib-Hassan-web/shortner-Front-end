import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <>
    
    <nav className='container bg-amber-200 py-5 '>

      <Link to={'/'}> Home</Link>
      <Link to={'/Login'}> Login</Link>

    </nav>
    
    </>
  )
}

export default Navbar