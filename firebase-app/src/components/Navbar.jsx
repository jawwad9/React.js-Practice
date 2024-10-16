import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div>
        <Link to={'Home'}>Home</Link>
        <Link to={'About'}>About</Link>
        <Link to={'Login'}>Login</Link>
        <Link to={'Register'}>Register</Link>
        </div>
        



    </>
  )
}

export default Navbar