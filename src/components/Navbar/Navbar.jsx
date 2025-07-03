import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
const Navbar = () => {

    const [menu,setMenu] = useState("home")

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" />
        <ul className='navbar-menu'>
            <li onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}>Home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu" ? "active" : ""}>Menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app" ? "active" : ""}>Mobile-App</li>
            <li onClick={()=>setMenu("contact")} className={menu==="contact" ? "active" : ""}>Contact Us</li>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button className='navbar-button'>Sign In</button>
            </div>
        </ul>
    </div>
    
  )
}

export default Navbar