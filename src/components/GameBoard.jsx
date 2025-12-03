import { useState } from "react";

export default function GameBoard({ board, onSelectSquare }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, columnIndex) => (
              <li key={columnIndex}>
                <button
                  disabled={symbol !== null}
                  onClick={() => {
                    onSelectSquare(rowIndex, columnIndex);
                  }}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
