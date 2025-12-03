export default function GameOver({ winner, onResetGame }) {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>DRAW!</p>}
      <p>
        <button onClick={onResetGame}>Rematch!</button>
      </p>
    </div>
  );
}
