import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";


function Navigation() {

  const [isMobile, setIsMobile] = useState(false);


  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="img-one-lease/home/LOGO.jpg" alt="logo du site" />
        </div>
        
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}> 
            <Link to="/" className="home">
              <li className="active" >Home</li>
            </Link>
            <Link to="/about" className="about">
              <li className="active">A propos</li>
            </Link>
            <Link to="/lld" className="lld">
              <li>LLD</li>
            </Link>
            <Link to="/" className="serve">
              <li>Nos services</li>
            </Link>
            <Link to="/" className="av">
              <li>Nos avantages</li>
            </Link>
            <Link to="/team" className="team">
              <li>L'équipe</li>
            </Link>
            <Link to="/" className="fi">
              <li>Fiscalité</li>
            </Link>
            <Link to="/" className="res">
              <li>Restitution</li>
            </Link>
            <Link to="/" className="new">
              <li>New!</li>
            </Link>
            <Link to="/" className="btnnav"> 
              <li>Accès client</li>
            </Link>
         
          </ul>
   
        <div className="mobile-menu-icon"
          onClick={()=> setIsMobile(!isMobile)}>
         {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </div>
      </nav>
    </header>
  );
}
export default Navigation;
  
{/* const[click, setClick] = useState(false)

  const handleClick = () =>setClick(!click);
  return (
    <nav className="navbar">
      <div className="nav-container  ">
        <NavLink exact to="/" className="nav-logo">
          <img src="img-one-lease/home/LOGO.jpg" alt="" className="" />
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
            >
              A propos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/lld"
              activeClassName="active"
              className="nav-links"
            >
              LLD
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/team"
              activeClassName="active"
              className="nav-links"
            >
              L'équipe
            </NavLink>
          </li>
          <li>
            <Button className="btn" >Accès client</Button>
          </li>
        </ul>
       
        <div className="nav-icon" onClick={handleClick}>
          <i
            className={click ? "fa-thin fa-circle-xmark " : "fa-solid fa-bars"}
          ></i>
          <div className="toggle">
            <i class="fa-solid fa-bars"></i>
            <i class="c"></i>
          </div>
        </div>
      </div>
    </nav>
  );
  

  export default Navigation;*/}
