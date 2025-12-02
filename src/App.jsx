import Player from "./assets/components/Player";
import GameBoard from "./assets/components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player defaultName={"Player 1"} symbol={"O"} />
          <Player defaultName={"Player 2"} symbol={"X"} />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
