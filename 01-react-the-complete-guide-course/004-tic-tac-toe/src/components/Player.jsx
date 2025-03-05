import { useState } from 'react';

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // Proper way in React to toggle the value
    // That because React is scheduling state update with the value of the current moment
    // For example, one might think that will will togge value twice:
    //
    // setIsEditing(!isEditing); // => true
    // setIsEditing(!isEditing); // => false
    //
    // but instead, it will schedule `setIsEditing` with the `false` value of `isEditing` twice:
    // setIsEditing(!isEditing); // => true
    // setIsEditing(!isEditing); // => true
    //
    setIsEditing((wasEditing) => !wasEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
  }

  return (
    <li>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
