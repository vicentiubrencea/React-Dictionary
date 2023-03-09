import React, { useState } from 'react';
import './App.css';

function App() {
  const [dictionary, setDictionary] = useState([]);
  const [newWord, setNewWord] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [message, setMessage] = useState('');

  function handleAddWord() {
    if (newWord.trim().length !== 0) {
      setDictionary([...dictionary, newWord.trim()]);
      setNewWord('');
      setMessage('');
    } else {
      setMessage('Please type a word');
    }
  }

  function handleSearchWord() {
    if (searchWord.trim().length === 0) {
      setMessage('Please type a word');
    } else if (dictionary.includes(searchWord.trim())) {
      setMessage('The word was found');
    } else {
      setMessage('The word was not found');
    }
    setSearchWord('');
  }

  return (
    <div className="App">
      <h1>Dictionary</h1>
      <h2><strong>Create your own dictionary</strong></h2>
      <label htmlFor="word">Add Word: </label>
      <input type="text" id="word" value={newWord} onChange={(e) => setNewWord(e.target.value)} />
      <button type="button" onClick={handleAddWord}>Add it</button>
      <br/><br/>
      <label htmlFor="findWord">Search Word: </label>
      <input type="text" id="findWord" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
      <button type="button" onClick={handleSearchWord}>Search</button>
      <p id="message">{message}</p>
    </div>
  );
}

export default App;