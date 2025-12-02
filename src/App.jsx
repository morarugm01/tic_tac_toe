import Player from "./assets/components/Player";
import GameBoard from "./assets/components/GameBoard";
import { useState } from "react";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handlePlayerTurn() {
    setCurrentPlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName={"Player 1"}
            symbol="X"
            isActive={currentPlayer === "X"}
          />
          <Player
            defaultName={"Player 2"}
            symbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>
        <GameBoard
          onHandleCurrentTurn={handlePlayerTurn}
          currentPlayer={currentPlayer}
        />
      </div>
    </main>
  );
}

export default App;
