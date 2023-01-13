import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Signup from './components/Signup';
// import { auth } from './firbase';
import StartGame from './components/StartGame';
import Game from './components/Game';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/startgame" element={<StartGame />} />
          <Route path="/startgame/game" element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
