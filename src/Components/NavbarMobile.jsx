import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { FaList } from "react-icons/fa";

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
        <Link to="/" className="navLink" onClick={toggleDrawer}>
          <IoHomeOutline className="homeIcon" />
          <p className="textNM">Home</p>
        </Link>
        <Link to="/about" className="navLink" onClick={toggleDrawer}>
          <MdPersonOutline className="aboutIcon" />
          <p className="textNM">About</p>
        </Link>
        <Link to="/contact" className="navLink" onClick={toggleDrawer}>
          <FaEnvelope className="contactIcon" />
          <p className="textNM">Contact</p>
        </Link>
        <Link to="/rules" className="navLink" onClick={toggleDrawer}>
          <FaList className="rulesIcon" />
          <p className="textNM">Rules</p>
        </Link>
      </ul>
    </>
  );
};

export default NavbarMobile;
