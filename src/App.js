import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import LiveDetection from './components/LiveDetection';
import GuidePage from './components/GuidePage';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/live-detection" element={<LiveDetection />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
