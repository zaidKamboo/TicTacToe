import React, { useState, useEffect } from "react";

const PlayVsAI = () => {
  const initialGrid = Array(9).fill(null);

  const [grid, setGrid] = useState(initialGrid);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [form, setForm] = useState(true);
  const [player, setPlayer] = useState(null);
  const [tie, setTie] = useState(false);

  const aiPlayer = "O"; // Define the AI player

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const sendDetails = async () => {
    try {
      // ... (existing code)
      var gameStatus;
      if (winner === "X") {
        gameStatus = `${player} won the game.`;
      } else if (winner === "O") {
        gameStatus = `A.I. won the game.`;
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
            player1: player,
            player2: "A.I.",
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

  const calculateWinner = (squares) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
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

  const checkForTie = () => {
    if (grid.every((cell) => cell !== null) && !winner) {
      setTie(true);
    } else {
      setTie(false);
    }
  };

  const resetGame = () => {
    setGrid(initialGrid);
    setXIsNext(true);
    setWinner(null);
    sendDetails();
    if (!player) {
      setForm(true);
    }
  };

  const handleStartNewGame = () => {
    setForm(true);
    resetGame();
  };

  const handleAIMove = () => {
    const availableMoves = grid
      .map((cell, index) => (cell === null ? index : null))
      .filter((item) => item !== null);

    // AI logic for selecting a move
    let aiMove = null;

    // Check for winning moves
    for (let i = 0; i < availableMoves.length; i++) {
      const copyGrid = [...grid];
      copyGrid[availableMoves[i]] = aiPlayer;
      if (calculateWinner(copyGrid) === aiPlayer) {
        aiMove = availableMoves[i];
        break;
      }
    }

    // If there's no winning move, block the player's winning move
    if (!aiMove) {
      for (let i = 0; i < availableMoves.length; i++) {
        const copyGrid = [...grid];
        copyGrid[availableMoves[i]] = xIsNext ? "X" : "O";
        if (calculateWinner(copyGrid) === (xIsNext ? "X" : "O")) {
          aiMove = availableMoves[i];
          break;
        }
      }
    }

    // If no winning/blocking move, choose a random move
    if (!aiMove) {
      aiMove =
        availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    const newGrid = [...grid];
    newGrid[aiMove] = aiPlayer;

    setGrid(newGrid);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newGrid));
  };

  useEffect(() => {
    if (!xIsNext && !winner) {
      handleAIMove();
    }
    checkForTie();
  }, [grid, xIsNext]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(null);
  };
  const handleClick = (index) => {
    if (winner || grid[index]) return;

    const newGrid = [...grid];
    newGrid[index] = "X"; // Player's move

    setGrid(newGrid);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newGrid));
  };

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
          {value}
        </p>
      </div>
    );
  };
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
                  placeholder="Enter Your name : "
                  maxLength={7}
                  minLength={2}
                  required
                  onChange={(e) => setPlayer(e.target.value)}
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
                      It's a draw.Very Well played {player}.
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
                            Congratulations ! You have won the game.
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
                            Hard luck ! A.I. has won the game. Better luck next
                            time.
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
                    xIsNext ? player : "A.I."
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

export default PlayVsAI;
