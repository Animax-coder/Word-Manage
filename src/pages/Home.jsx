import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/manage">Manage Words</Link>
        <Link to="/learn">Learning Interface</Link>
        <Link to="/evaluate">Evaluations</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default Home;
