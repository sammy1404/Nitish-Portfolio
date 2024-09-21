// src/menuToggle.js

function toggleMenu() {
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobileMenu')
    if (menuButton) {
      menuButton.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    }
  }
  
  // Export the function to use it in your React component
  export { toggleMenu };
  