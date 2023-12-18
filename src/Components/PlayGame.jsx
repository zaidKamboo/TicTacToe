import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // Represents the game board
  const [xIsNext, setXIsNext] = useState(true); // Determines the current player

  // Function to handle a player's move
  const handleSquareClick = (index) => {
    const boardCopy = [...board];

    // If the square is already filled or there's a winner, return early
    if (calculateWinner(board) || boardCopy[index]) {
      return;
    }

    // Update the board with the player's move
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  // Function to calculate the winner
  const calculateWinner = (currentBoard) => {
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
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a]; // Return the winner ('X' or 'O')
      }
    }

    return null; // Return null if there's no winner yet
  };

  // Function to display the status
  const getStatus = () => {
    const winner = calculateWinner(board);

    if (winner) {
      return `Winner : ${winner}`;
    } else if (board.every((square) => square !== null)) {
      return "It's a draw!";
    } else {
      return `Next Player : ${xIsNext ? "X" : "O"}`;
    }
  };

  // Function to render the game board
  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleSquareClick(index)}>
        {board[index]}
      </button>
    );
  };

  return (
    <div className="tic-tac-toe">
      <div className="status">
        <p className="gameStatus">{getStatus()}</p>
      </div>
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
