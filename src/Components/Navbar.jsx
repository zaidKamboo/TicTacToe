import React from "react";
import bgVid from "../Media/Videos/bgVis.mp4";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
const Navbar = ({ toggleDrawer, toggleDrawerSideBar }) => {
  return (
    <div className="main">
      <div className="navbarContainer">
        <nav className="navbar">
          <div className="navbarMobileContainer">
            <Link to="/playGame" className="playGame">
              Play ? Tic Tac Toe
            </Link>
            <div className="hamburger" onClick={() => toggleDrawer()}>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>

          <NavbarMobile
            toggleDrawer={toggleDrawer}
            toggleDrawerSideBar={toggleDrawerSideBar}
          />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
