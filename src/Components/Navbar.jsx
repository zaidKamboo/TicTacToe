import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
import LoadingBar from "react-top-loading-bar";
import LoadingContext from "../Context/LoadingContext";
import Loading from "./Loading";
import { IoGameControllerOutline } from "react-icons/io5";

const Navbar = ({ toggleDrawer, toggleDrawerSideBar }) => {
  const lc = useContext(LoadingContext);
  const { loading } = lc;
  return (
    <div className="main">
      <LoadingBar color="#f11946" progress={loading} />
      <div className="navbarContainer">
        <nav className="navbar">
          <div className="navbarMobileContainer">
            <Link to="/playGame" className="playGame">
              <IoGameControllerOutline className="gameIcon" />
              <p className="gameText">Play ? Tic Tac Toe</p>
            </Link>
            <div className="hamburgerParent">
              <div className="hamburger" onClick={() => toggleDrawer()}>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
          <NavbarDesktop />
          <NavbarMobile
            toggleDrawer={toggleDrawer}
            toggleDrawerSideBar={toggleDrawerSideBar}
          />
        </nav>
      </div>

      {loading && <Loading />}
    </div>
  );
};

export default Navbar;
