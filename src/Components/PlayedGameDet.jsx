import React from "react";

const PlayedGameDet = (props) => {
  const { playedGame } = props;
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="card-body">
          <div className="cardContent">
            <div className="card-title">
              <p className="head">
                <strong className="str"> Game Status : </strong>
                {playedGame.gameStatus}
              </p>
              {/* <p className="headValue"></p> */}
            </div>
            <div className="card-text ">
              <p className="player">
                <strong className="str"> Player 1 : </strong>
                {playedGame.player1}
              </p>
            </div>
            <p className="card-text ">
              <p className="player">
                <strong className="str">Player 2 : </strong>
                {playedGame.player2}
              </p>
            </p>
            <div className="card-text ">
              <p className="date">
                <strong className="str">Played On : </strong>
                {playedGame.playedAt.toLocaleString("en-US", {
                  timeZone: "Asia/Kolkata",
                })}
              </p>

              <p className="dateValue"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayedGameDet;
