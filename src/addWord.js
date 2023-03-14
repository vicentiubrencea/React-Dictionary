import React, { useState } from 'react';

function AddWord({ onAddWord }) {
  const [newWord, setNewWord] = useState('');

  function handleAddWord() {
    if (newWord.trim().length !== 0) {
      onAddWord(newWord.trim());
      setNewWord('');
    }
  }

  return (
    <>
      <label> Add Word: </label>
      <input type="text" value={newWord} onChange={(e) => setNewWord(e.target.value)} />
      <button type="button" onClick={handleAddWord}>Add it</button>
    </>
  );
}

export default AddWord;
