import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="App-header">
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
  );
};

export default Navbar;
