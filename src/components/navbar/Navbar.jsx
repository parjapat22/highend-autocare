import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="container">
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About us</a>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
