import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <span className="logo-cs2">CS2</span>
          <span className="logo-text">NEXUS</span>
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/gameplay" className="nav-link" onClick={() => setIsOpen(false)}>
            Gameplay
          </Link>
          <Link to="/esports" className="nav-link" onClick={() => setIsOpen(false)}>
            Esports
          </Link>
          <Link to="/media" className="nav-link" onClick={() => setIsOpen(false)}>
            Media
          </Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>

        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
