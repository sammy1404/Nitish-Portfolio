import React from 'react';

import NavBar from '../components/navbar';
import ThemeButton from '../components/themeButton';
import Home from '../sections/home';
import About from '../sections/about';
import Research from '../sections/research';
import Projects from '../sections/projects';
import Publications from '../sections/publications';
import Contact from '../sections/contact';
import Seminars from '../sections/seminars';
import BlogButton from '../components/BlogButton';
import "../App.css"; // We'll add some CSS here

function Homepage() {
  return (
    // Your existing homepage content
    <div className="App">
      <NavBar />
      <ThemeButton />
      <Home />
      <About />
      <Research />
      <Projects />
      <Publications />
      <Seminars />
      <Contact />
      <BlogButton />
    </div>
  );
}

export default Homepage;
