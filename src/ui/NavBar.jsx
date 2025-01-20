import { NavLink } from "react-router-dom";
import Logo from "../assets/nav-logo.png";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <section className={styles.sectionNav}>
        <div className={`container ${styles.containerNav}`}>
          {/* logo */}
          <a href="/" className={styles.navLogo}>
            <img src={Logo} alt="logo" />
          </a>

          {/* menu */}
          <ul className={styles.navMenu}>
            <li>
              <NavLink to="/home">Home</NavLink>
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

export default NavBar;
