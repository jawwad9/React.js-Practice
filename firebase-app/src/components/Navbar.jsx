import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase/firebaseconfig';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const navigate = useNavigate();
    const logoutUser = () => {
        const user = signOut(auth).then(() => {
         console.log(user);
          }).catch((error) => {
            navigate("/Login")
          });
      }
  return (
    <>

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
    </div>
    <a className="btn btn-ghost text-xl"><Link to={'Home'}>Products</Link></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a><Link to={'Home'}>Home</Link></a></li>
      <li><a><Link to={'About'}>About</Link></a></li>
      <li><a><Link to={'Contact'}>Contact</Link></a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn" onClick={logoutUser}>Logout</a>
  </div>
</div>

        <div>
        <Link to={'Login'}>Login</Link>
        <Link to={'Register'}>Register</Link>
        <Link to={'Home'}>Home</Link>
        </div>

     


    </>
  )
}

export default Navbar