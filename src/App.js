import "./index.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  const [toggleDrawerSideBar, setToggleDrawerSideBar] = useState({
    display: "none",
  });
  const toggleDrawer = () => {
    if (toggleDrawerSideBar.display === "none") {
      setToggleDrawerSideBar({ display: "flex" });
    } else {
      setToggleDrawerSideBar({ display: "none" });
    }
  };
  return (
    <Router>
      <Navbar
        toggleDrawer={toggleDrawer}
        toggleDrawerSideBar={toggleDrawerSideBar}
      />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
