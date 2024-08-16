import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ManageWords.css';

function ManageWords() {
  const [words, setWords] = useState([]);
  const [newWord, setNewWord] = useState('');

  const addWord = () => {
    if (newWord.trim()) {
      setWords([...words, newWord.trim()]);
      setNewWord('');
    }
  };

  return (
    <div className="manage-words-container">
      <h1>Manage Words</h1>
      <input
        type="text"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
        placeholder="Enter new word"
      />
      <button onClick={addWord}>Add Word</button>
      <ul>
        {words.length === 0 ? (
          <li>No words added yet.</li>
        ) : (
          words.map((word, index) => (
            <li key={index}>{word}</li>
          ))
        )}
      </ul>
      <Link to="/">
        <button>Back to Login</button>
      </Link>
    </div>
  );
}

export default ManageWords;
