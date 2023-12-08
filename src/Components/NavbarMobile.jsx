import React from "react";
import { Link } from "react-router-dom";
const NavbarMobile = ({ toggleDrawer, toggleDrawerSideBar }) => {
  return (
    <>
      <ul className="navList" style={toggleDrawerSideBar}>
        <input
          className="close"
          type="submit"
          value="X"
          onClick={toggleDrawer}
        />
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/about" className="navLink">
          About
        </Link>
        <Link to="/contact" className="navLink">
          Contact
        </Link>
        <Link to="/rules" className="navLink">
          Rules
        </Link>
        <Link to="/more" className="navLink">
          More
        </Link>
      </ul>
    </>
  );
};

export default NavbarMobile;
