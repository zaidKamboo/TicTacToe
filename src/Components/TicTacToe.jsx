import React, { useState } from "react";

const TicTacToe = () => {
  const [grid, setGrid] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  // Function to handle the click event on grid items
  const handleClick = (index) => {
    if (winner || grid[index]) return;

    const newGrid = [...grid];
    newGrid[index] = xIsNext ? "X" : "O";

    setGrid(newGrid);
    setXIsNext(!xIsNext);
    setWinner(calculateWinner(newGrid));
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

    return (
      <div
        key={index}
        className={`grid-item ${isWinnerSquare ? "winner" : ""}`}
        onClick={() => handleClick(index)}
      >
        {grid[index]}
      </div>
    );
  };

  return (
    <div className="gridParent">
      <div className="game-container">
        <div className="grid-container">
          {grid.map((_, index) => renderGridItem(index))}
        </div>
        {winner ? (
          <div className="winner-message">{`Winner: ${winner}`}</div>
        ) : (
          <div className="player-turn">{`Next Player: ${
            xIsNext ? "X" : "O"
          }`}</div>
        )}
      </div>
    </div>
  );
};

export default TicTacToe;
