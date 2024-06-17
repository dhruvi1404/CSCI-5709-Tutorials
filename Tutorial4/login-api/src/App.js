import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UserProfileList from './components/UserProfileList';
import UserProfileDetail from './components/UserProfileDetail';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<UserProfileList />} />
                <Route path="/user/:id" element={<UserProfileDetail />} />
            </Routes>
    </Router>
  );
}

export default App;
