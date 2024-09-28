import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Header() {

  const curLocation = useLocation() 
  const [show, setShow] = useState(false)

  // navbar visibility
  // const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {
    setShow(!show)
  }

  const handleButtonToggle = () => {
    return setShow(!show)
  }

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink className={`${curLocation.pathname === '/' ? "active-nav-link" : "non-active-nav-link"}`} to="/" onClick={handleVisible} >Home</NavLink>
              </li>
              <li>
                <NavLink className={`${curLocation.pathname === '/about' ? "active-nav-link" : "non-active-nav-link"}`} to="/about" onClick={handleVisible} >About</NavLink>
              </li>
              <li>
                <NavLink className={`${curLocation.pathname === '/country' ? "active-nav-link" : "non-active-nav-link"}`} to="/country"  onClick={handleVisible} >Country</NavLink>
              </li>
              <li>
                <NavLink className={`${curLocation.pathname === '/contact' ? "active-nav-link" : "non-active-nav-link"}`} to="/contact"  onClick={handleVisible}>Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu" >
            <button className='menu-btn' onClick={handleButtonToggle}>
             {show ? <RxCross2 /> : <GiHamburgerMenu />} 
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
