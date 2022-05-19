import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>        
        <nav>        
           <li> <Link to="/home" >  Home           </Link>  </li>
           <li> <Link to="/Students" >  Students    </Link> </li>
           <li> <Link to="/ContactUs" >  Contact Us </Link>  </li>
       </nav>
    </div>
  )
}

export default NavBar
