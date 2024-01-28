import React from "react";
// import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/nav-logo.png";

const NavBar = () => {
  return (
    <nav className="container-max">
      <div className="container nav__div">
        {/* nav menu */}
        <a href="/" className="nav__logo">
          <img src={Logo} alt="logo" />
        </a>

        {/* nav menu */}
        <ul className="nav__menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
