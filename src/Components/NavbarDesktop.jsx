import React from "react";
import { Link } from "react-router-dom";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { FaList } from "react-icons/fa";

const NavbarDesktop = () => {
  return (
    <div className="navbarDesktopContainer">
      <ul className="navList">
        <Link to="/playGame" className="navLink">
          <IoGameControllerOutline className="playGameIcon" />
          <p className="playGameText">Play ? Tic tac Toe</p>
        </Link>
        <Link to="/" className="navLink">
          <IoHomeOutline className="homeIcon" />
          Home
        </Link>
        <Link to="/about" className="navLink">
          <MdPersonOutline className="aboutIcon" />
          About
        </Link>
        <Link to="/contact" className="navLink">
          <FaEnvelope className="contactIcon" />
          Contact
        </Link>
        <Link to="/rules" className="navLink">
          <FaList className="rulesIcon" />
          Rules
        </Link>
      </ul>
    </div>
  );
};

export default NavbarDesktop;
