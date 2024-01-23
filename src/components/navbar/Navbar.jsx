import React from "react";
// import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="/" className="nav__logo">
          <img src={Logo} alt="logo" />
        </a>

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
