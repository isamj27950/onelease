

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.css";
import Button from '../button/Button';

 function Navigation() {
  const[click, setClick] = useState(false)

  const handleClick = () =>setClick(!click);
  return (
     <nav className='navbar'>
      <div className="nav-container  ">
        <NavLink exact to="/" className="nav-logo" >
        <img src="img-one-lease/home/LOGO.jpg" alt="" className=""/>
          
        </NavLink>
        <ul className= {click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <NavLink exact to="/" activeClassName="active" className="nav-links">
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink exact to="/about" activeClassName="active" className="nav-links" >
              A propos
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink exact to="/lld" activeClassName="active" className="nav-links">
              LLD
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink exact to="/team" activeClassName="active" className="nav-links">
              L'équipe
            </NavLink>
          </li>
        </ul>
        <Button >Accès client</Button>
      <div className='nav-icon' onClick={handleClick}>
        <i className={click ? "fas fa-times " : "fas fa-bars"}></i>
      <div className='toggle'> 
        <i class="fa-solid fa-bars"></i>
        <i class="fa-thin fa-circle-xmark"></i>
        </div>
      </div>
      </div>

     </nav>
  )
}
export default Navigation;

