import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        margin: "30px"
    }}>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="services">Services</Link>
    </div>
  )
}

export default Navber