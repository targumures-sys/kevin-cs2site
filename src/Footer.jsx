import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">CS2 NEXUS</h3>
            <p className="footer-desc">
              Experience the ultimate competitive FPS. Master the art of strategy, precision, and teamwork.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon" title="Twitter">𝕏</a>
              <a href="#" className="social-icon" title="Discord">💬</a>
              <a href="#" className="social-icon" title="YouTube">▶️</a>
              <a href="#" className="social-icon" title="Twitch">📺</a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About CS2</Link></li>
              <li><Link to="/gameplay">Gameplay</Link></li>
              <li><Link to="/esports">Esports</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Media Gallery</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Updates</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Counter-Strike 2. All rights reserved. | Built with expertise and passion</p>
        </div>
      </div>
    </footer>
  );
}
