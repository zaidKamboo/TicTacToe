import React from "react";

const Rules = () => {
  return (
    <div className="rulesContainer">
      <div className="headingRC">
        <h1>Rules of the Game</h1>
      </div>
      <div className="sectionContainerRc">
        <section>
          <h2>Overview</h2>
          <p>
            Tic Tac Toe is a classic and simple paper-and-pencil game typically
            played between two players, often referred to as X and O. The game
            is commonly played on a 3x3 grid. The objective is to be the first
            player to form a horizontal, vertical, or diagonal line of three of
            their marks (Xs or Os), either consecutively or through strategic
            placement.
          </p>
        </section>

        <section>
          <h2>Objective</h2>
          <p>
            Players take turns placing their respective marks (X or O) on an
            empty cell within the grid. The game continues until either one
            player achieves the winning pattern or all cells are filled,
            resulting in a draw. Tic Tac Toe is straightforward yet engaging,
            requiring players to anticipate their opponent's moves while aiming
            to create their own winning sequence.
          </p>
        </section>

        <section>
          <h2>Gameplay</h2>
          <p>
            The gameplay of Tic Tac Toe revolves around a 3x3 grid where two
            players take turns marking the cells with their respective symbols,
            usually 'X' and 'O'. The objective is to create a sequence of three
            of their symbols in a row, either horizontally, vertically, or
            diagonally. Players start with an empty grid and take turns placing
            their marks in any available cell until one achieves the winning
            pattern or all cells are filled, resulting in a draw.
          </p>
        </section>

        <section>
          <h2>Winning Conditions</h2>
          <p>
            In Tic Tac Toe, the winning conditions involve creating a sequence
            of three of the same marks (either Xs or Os) in a row, column, or
            diagonal on the 3x3 grid. A player can win the game by strategically
            placing their marks to achieve one of these winning configurations.
            The winning patterns include three marks lined up horizontally,
            vertically, or diagonally.
          </p>
        </section>

        <section>
          <h2>Strategy Tips</h2>
          <p>
            In Tic Tac Toe, mastering a few strategic approaches can
            significantly enhance gameplay. One key tactic involves seizing the
            center cell when possible, as it provides the most opportunities to
            create winning patterns across rows, columns, and diagonals. Players
            should also focus on creating two-way winning possibilities,
            positioning their marks to threaten multiple potential lines
            simultaneously, forcing the opponent into a defensive stance.
          </p>
        </section>

        <section>
          <h2>Variations</h2>
          <p>
            Variations of the classic Tic Tac Toe game exist, offering diverse
            gameplay experiences that add complexity or introduce new elements
            to the original concept. One popular variation is "Ultimate Tic Tac
            Toe," which consists of a 3x3 grid, each cell containing a smaller
            3x3 grid. Players must not only win each individual small grid but
            also strategically aim to claim larger grids by winning smaller
            ones.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Rules;
