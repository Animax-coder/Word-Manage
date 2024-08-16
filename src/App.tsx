import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManageWords from './components/ManageWords.jsx';
import LearningInterface from './components/LearningInterface.jsx';
import Evaluations from './components/Evaluation.jsx';
import Login from './components/Login.jsx';
import Home from './components/HomePage.jsx';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage" element={<ManageWords />} />
        <Route path="/learn" element={<LearningInterface />} />
        <Route path="/evaluate" element={<Evaluations />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
