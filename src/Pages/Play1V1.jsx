import React, { useState, useEffect, useContext } from "react";
import LoadingContext from "../Context/LoadingContext";

const Play1V1 = () => {
  const initialGrid = Array(9).fill(null);
  const lc = useContext(LoadingContext);
  const { setLoading, loading } = lc;

  const [grid, setGrid] = useState(initialGrid);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [form, setForm] = useState(true);
  const [player1, setPlayer1] = useState(null);
  const [player2, setPlayer2] = useState(null);
  const [tie, setTie] = useState(false);

  // Sending the played game details to backend.
  const sendDetails = async () => {
    try {
      // ... (existing code)
      var gameStatus;
      if (winner === "X") {
        gameStatus = `${player1} won the game.`;
      } else if (winner === "O") {
        gameStatus = `${player2} won the game.`;
      } else {
        gameStatus = "It was a draw.";
      }
      const res = await fetch(
        "http://localhost:5000/gameDetails/addPlayedGame",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            player1,
            player2,
            gameStatus,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Network response was not ok.");
      }

      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error("Error sending game details:", error.message);
      // Handle errors here
    }
  };
  // const sendDetails = async () => {
  //   console.log(player1, player2, gameStatus);
  //   const res = await fetch("http://localhost:5000/gameDetails/addPlayedGame", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       player1,
  //       player2,
  //       gameStatus,
  //     }),
  //   });
  //   const json = await res.json();
  //   console.log(json);
  // };

  // Function to handle the click event on grid items
  const handleClick = (index) => {
    if (winner || grid[index]) return;

    const newGrid = [...grid];
    newGrid[index] = xIsNext ? "X" : "O";

    setGrid(newGrid);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newGrid));
  };
  const checkForTie = () => {
    if (grid.every((cell) => cell !== null) && !winner) {
      setTie(true);
    } else {
      setTie(false);
    }
  };
  // Function to check for a winner
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  // Function to render individual grid items
  const renderGridItem = (index) => {
    const isWinnerSquare = winner && winner === grid[index];
    const value = grid[index];
    let animationClass = "";
    if (value === "X") {
      animationClass = "xAnimation";
    } else if (value === "O") {
      animationClass = "oAnimation";
    }

    return (
      <div
        key={index}
        className={`grid-item ${isWinnerSquare ? "winner" : ""}`}
        onClick={() => handleClick(index)}
      >
        <p className={`pawn  ${animationClass ? animationClass : ""}`}>
          {grid[index]}
        </p>
      </div>
    );
  };

  const resetGame = () => {
    setGrid(initialGrid);
    setXIsNext(true);
    setWinner(false);
    sendDetails();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(null);
  };

  const handleCross = () => {
    setWinner(null);
    setTie(false);
    sendDetails();
  };
  const handleStartNewGame = () => {
    handleCross();
    resetGame();
    setForm(true);
    sendDetails();
  };
  useEffect(() => {
    checkForTie();
  }, [checkForTie]);
  return (
    <div className="play1v1Cont">
      {form ? (
        <>
          <form onSubmit={handleSubmit} className="playerInputsForm">
            <div className="formCont">
              <p className="heading">Please enter the Player's Details :</p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-text"
                  placeholder="Enter Player 1 name : "
                  maxLength={7}
                  minLength={2}
                  onChange={(e) => setPlayer1(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-text"
                  maxLength={7}
                  minLength={2}
                  placeholder="Enter Player 2 name :"
                  onChange={(e) => setPlayer2(e.target.value)}
                  required
                />
              </div>
              <input type="submit" className="submit" value="Submit" />
            </div>
          </form>
        </>
      ) : (
        <></>
      )}
      <div className="gridParent">
        <div className="game-container">
          <div className="grid-container">
            {grid.map((_, index) => renderGridItem(index))}
          </div>
          <div>
            {tie ? (
              <>
                <div className="winner-message" style={{ zIndex: 4 }}>
                  <div className="winnerMessage">
                    <p className="message">
                      It's a draw.Very Well played {player1} and {player2}
                    </p>
                    <div className="buttonContWm">
                      <button className="btns" onClick={() => resetGame()}>
                        Play again
                      </button>
                      <button
                        className="stng"
                        onClick={() => {
                          handleStartNewGame();
                        }}
                      >
                        Start new game
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {winner ? (
                  winner === "X" ? (
                    <>
                      <div className="winner-message" style={{ zIndex: 4 }}>
                        <div className="winnerMessage">
                          <p className="message">
                            Congratulations ! {player1} has won the game.
                          </p>
                          <div className="buttonContWm">
                            <button className="btns" onClick={resetGame}>
                              Play again
                            </button>
                            <button
                              className="stng"
                              onClick={() => {
                                handleStartNewGame();
                              }}
                            >
                              Start new game
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="winner-message" style={{ zIndex: 4 }}>
                        <div className="winnerMessage">
                          <p className="message">
                            Congratulations ! {player2} has won the game.
                          </p>
                          <div className="buttonContWm">
                            <button
                              className="btns"
                              onClick={() => resetGame()}
                            >
                              Play again
                            </button>
                            <button
                              className="stng"
                              onClick={() => {
                                handleStartNewGame();
                              }}
                            >
                              Start new game
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                ) : (
                  <div className="player-turn">{`Next Player : ${
                    xIsNext ? player1 : player2
                  }`}</div>
                )}
              </>
            )}
            <button className="playAgain" onClick={resetGame}>
              Play again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play1V1;
