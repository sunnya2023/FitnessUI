import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../images/logo.png";
import { links } from "../data";
import { FaBars } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav_container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav logo" />
        </Link>
        <ul className={`nav_links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav_toggle-btn"
          onClick={() => setIsNavShowing(!isNavShowing)}
        >
          {isNavShowing ? <CgClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
