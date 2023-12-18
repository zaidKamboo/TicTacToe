import React from "react";
import { Link } from "react-router-dom";
const PlayGameHome = () => {
  return (
    <>
      <div className="playGameHome">
        <div className="contplayGame2">
          <div className="gameModes">
            <p className="text"> Select the game Mode you want to play :</p>
          </div>
          <div className="btnContainer">
            <Link to="/playGame/play1v1">
              <button className="customBtn">Play 1 VS 1</button>
            </Link>
            <Link to="/playGame/playVsAi">
              <button className="aiBtn">Play with A.I.</button>
            </Link>
          </div>
          <div className="gameDetails">
            <div className="playedGames">
              <p className="text">
                Click down to see all the played game details.
              </p>
            </div>
            <div className="btnContainer2">
              <Link to="/playGame/playedGameDetails">
                <button className="detailsBtn">Played games Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayGameHome;
