import React from 'react';
import Blog from './pages/Blog';
import Homepage from './pages/Homepage';
import "./App.css"; // We'll add some CSS here
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './supabase/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
