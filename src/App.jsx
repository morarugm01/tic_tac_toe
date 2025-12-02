import Player from "./assets/components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player defaultName={"Player 1"} symbol={"O"} />
          <Player defaultName={"Player 2"} symbol={"X"} />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
