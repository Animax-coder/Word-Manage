import React from 'react';
import './Evaluation.css';

function Evaluation() {
  const totalWords = 50; // Example total words
  const learnedWords = 20; // Example learned words

  return (
    <div className="evaluation-container">
      <h1>Evaluation Interface</h1>
      <div className="progress-summary">
        <h2>Progress Summary</h2>
        <p>Total Words: {totalWords}</p>
        <p>Words Learned: {learnedWords}</p>
        <p>Words Remaining: {totalWords - learnedWords}</p>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${(learnedWords / totalWords) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default Evaluation;
