import React from 'react';
import NavBar from './components/navbar.js';
import ThemeButton from './components/themeButton.js';
import Home from './sections/home.js'
import About from './sections/about.js';
import Research from './sections/research.jsx';
import "./App.css"; // We'll add some CSS here

function App() {
  return (
    <div className="App">
      <NavBar />
      <ThemeButton />
      <Home />
      <About />
      <Research />
    </div>
  );
}

export default App;
