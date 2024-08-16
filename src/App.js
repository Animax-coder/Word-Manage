import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
import ManageWords from './components/ManageWords.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/manage-words" element={<ManageWords />} />
      </Routes>
    </Router>
  );
}

export default App;
