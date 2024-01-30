import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/nav-logo.png";

const NavBa = () => {
  return (
    <nav>
      <section className="container-max navbar-max">
        <div className="container navbar">
          {/* nav menu */}
          <a href="/" className="nav__logo">
            <img src={Logo} alt="logo" />
          </a>

          {/* nav menu */}
          <ul className="nav__menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default NavBa;
