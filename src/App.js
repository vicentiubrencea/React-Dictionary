import React, { useState } from 'react';
import './App.css';
import AddWord from './addWord';
import SearchWord from './searchWord';

function App() {
  const [dictionary, setDictionary] = useState([]);

  function handleAddWord(newWord) {
    setDictionary([...dictionary, newWord]);
  }

  return (
    <div className="App">
      <h1>Dictionary</h1>
      <h2><strong>Create your own dictionary</strong></h2>
      <AddWord onAddWord={handleAddWord} />
      <br/><br/>
      <SearchWord dictionary={dictionary} />
    </div>
  );
}

export default App;
