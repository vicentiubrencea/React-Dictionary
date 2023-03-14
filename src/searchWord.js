import React, { useState } from 'react';

function SearchWord({ dictionary }) {
  const [searchWord, setSearchWord] = useState('');
  const [message, setMessage] = useState('');

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
    <>
      <label>Search Word: </label>
      <input type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
      <button type="button" onClick={handleSearchWord}>Search</button>
      <p>{message}</p>
    </>
  );
}

export default SearchWord;

