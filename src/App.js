import "./index.css";
import { useContext, useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PlayGameHome from "./Pages/PlayGameHome";
import Footer from "./Components/Footer";
import Play1V1 from "./Pages/Play1V1";
import PlayVsAI from "./Pages/PlayVsAi";
import PlayedGameDets from "./Pages/PlayedGameDets";
import LoadingState from "./Context/LoadingState";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Rules from "./Pages/Rules";
import GetAllMessages from "./Pages/GetAllMessages";

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
    <LoadingState>
      <Router>
        <Navbar
          toggleDrawer={toggleDrawer}
          toggleDrawerSideBar={toggleDrawerSideBar}
        />

        <Routes>
          <Route exact path="/playGame" Component={PlayGameHome} />
          <Route exact path="/playGame/play1v1" Component={Play1V1} />
          <Route exact path="/playGame/playVsAi" Component={PlayVsAI} />
          <Route
            exact
            path="/playGame/playedGameDetails"
            Component={PlayedGameDets}
          />
          <Route exact path="/" Component={Home} />
          <Route exact path="/home" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
          <Route
            exact
            path="/contact/getAllMessages"
            Component={GetAllMessages}
          />
          <Route exact path="/rules" Component={Rules} />
        </Routes>
        <Footer />
      </Router>
    </LoadingState>
  );
}

export default App;
