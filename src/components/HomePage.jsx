import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to the Vocabulary App</h1>
      <div className="button-group">
        <Link to="/learn">
          <button>Go to Learning Interface</button>
        </Link>
        <Link to="/manage">
          <button>Manage Words</button>
        </Link>
        <Link to="/evaluate">
          <button>View Evaluation</button>
        </Link>
        <Link to="/login">
          <button>Login </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
