import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Make sure this path is correct
import { collection, getDocs } from 'firebase/firestore';
import './LearningInterface.css';

function LearningInterface() {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'words'));
        const wordsArray = querySnapshot.docs.map((doc) => doc.data());
        setWords(wordsArray);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };

    fetchWords();
  }, []);

  const handleNextWord = () => {
    setShowMeaning(false);
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  if (words.length === 0) return <p>Loading...</p>;

  const { word, meaning } = words[currentWordIndex];

  return (
    <div className="learning-container">
      <h1>Learning Interface</h1>
      <div className="flashcard">
        <div className="flashcard-content">
          <h2>{word}</h2>
          {showMeaning && <p>{meaning}</p>}
        </div>
        <button onClick={() => setShowMeaning(!showMeaning)}>
          {showMeaning ? 'Hide Meaning' : 'Show Meaning'}
        </button>
        <button onClick={handleNextWord}>Next Word</button>
      </div>
    </div>
  );
}

export default LearningInterface;
