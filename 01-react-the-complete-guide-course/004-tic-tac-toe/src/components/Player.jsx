import { useState } from 'react';

export default function Player({ name, symbol }) {
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

  let playerName = <span className="player-name">{name}</span>
  if (isEditing) {
    playerName = <input type="text" required value={name} />
  }

  return (
    <li>
      <span className='player'>
        {playerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}
