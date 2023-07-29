import React from 'react';

const Header = () => {
    return (
      <header className="bg-dark py-4">
        <h1 className="text-white text-center">Simon Pereira</h1>
        <nav className="d-flex justify-content-center mt-3">
          <a href="#home" className="text-white mx-3">Home</a>
          <a href="#about" className="text-white mx-3">About</a>
          <a href="#projects" className="text-white mx-3">Projects</a>
          <a href="#contact" className="text-white mx-3">Contact</a>
        </nav>
      </header>
    );
  };
  
  export default Header;