import { useState } from "react";

export default function Player({ defaultName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(defaultName);

  function setPlayer() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = (
      <input type="text" required value={name} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {!isEditing && <button onClick={setPlayer}>Edit</button>}
      {isEditing && <button onClick={setPlayer}>Save</button>}
    </li>
  );
}
