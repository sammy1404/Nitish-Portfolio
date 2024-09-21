// src/Navbar.js
import React, { useState } from "react";
import { toggleMenu } from './menutoggle'; // Import the toggle function
import "./navbar.css"; // We'll add some CSS here

function NavBar() {
    
  return (
    <div id="navigation">
      <nav id="desktopNav">
        <h1>Smudge's Hub</h1>
        <ul id="desktopMenu">
          <li><a>About</a></li>
          <li><a>Research</a></li>
          <li><a>Projects</a></li>
          <li><a>Publications</a></li>
          <li><a>Seminar and Talks</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>

      
      <div id="mobileNav">
        <div id="menu">
        <h1>Smudge's Hub</h1>
          
        </div>
      </div>
      <ul class="mobileMenu">
        <li><a>About</a></li>
        <li><a>Research</a></li>
        <li><a>Projects</a></li>
        <li><a>Publications</a></li>
        <li><a>Seminar and Talks</a></li>
        <li><a>Contact</a></li>
      </ul>
      <div class="menu-button" onClick={toggleMenu}>
          <div class="ham-bar bar-top"></div>
          <div class="ham-bar bar-bottom"></div>
      </div>

    </div>
    


  );
};

export default NavBar;
