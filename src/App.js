// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import LiveDetection from './components/LiveDetection';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/live-detection" element={<LiveDetection />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
