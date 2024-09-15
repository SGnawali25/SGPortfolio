import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 800);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 800);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='header'>
      <h1>Sandesh Gnawali</h1>
      {isMobileView ? (
        <>
          <button className='menu-button' onClick={handleMenuClick}>
          ☰
          </button>
          <ul className={isMenuOpen ? 'dropdown-menu open' : 'dropdown-menu'}>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#hackathons">Hackathons</a></li>
            <li><a href="https://drive.google.com/file/d/1G4ttWItOaE5VLwC25WpqZEKbGesuTWlf/view" target='_blank' rel='noopener noreferrer'>Resume</a></li>
          </ul>
        </>
      ) : (
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#hackathons">Hackathons</a></li>
            <li><a href="https://drive.google.com/file/d/1G4ttWItOaE5VLwC25WpqZEKbGesuTWlf/view" target='_blank' rel='noopener noreferrer'>Resume</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;

