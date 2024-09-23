// src/Navbar.js
import React, { useState } from "react";
import { toggleMenu } from './menutoggle'; // Import the toggle function
import "./navbar.css"; // We'll add some CSS here

function NavBar() {
    
  return (
    <div id="navigation">
      <nav id="desktopNav">
      <h1 className="logo"><a href="#">Smudge's Hub</a></h1>
        <ul id="desktopMenu">
          <li><a href="#about">About</a></li>
          <li><a href="#research">Research</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#publications">Publications</a></li>
          <li><a href="#seminars">Seminar and Talks</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      
      <div id="mobileNav">
        <div id="menu">
        <h1 className="logo"><a href="#">Smudge's Hub</a></h1>
          
        </div>
      </div>
      <ul class="mobileMenu">
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#research" onClick={toggleMenu}>Research</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#publications" onClick={toggleMenu}>Publications</a></li>
        <li><a href="#seminars" onClick={toggleMenu}>Seminar and Talks</a></li>
        <li><a href="#contact"onClick={toggleMenu}>Contact</a></li>
      </ul>
      <div class="menu-button" onClick={toggleMenu}>
          <div class="ham-bar bar-top"></div>
          <div class="ham-bar bar-bottom"></div>
      </div>

    </div>
    


  );
};

export default NavBar;
