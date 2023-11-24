

import React from 'react'
import { NavLink } from 'react-router-dom'

 function Nav() {
  return (
    <>
     <nav style={{display:"flex", justifyContent:"space-around", alignItems:"center"}} className="head-nav">
        <span>ReactVite</span>
        <ul style={{display:"flex", justifyContent:"space-between", alignItems:"center", listStyle: "none", gap: "1rem"}}>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/contact'>Contact Us</NavLink></li>
          <li><NavLink to='/gallery'>Gallery</NavLink></li>
          <li><NavLink to='/about'>About Us</NavLink></li>
          <li><NavLink to='/team'>Team</NavLink></li>

        </ul>
      </nav>

    </>
  )
}



export default Nav