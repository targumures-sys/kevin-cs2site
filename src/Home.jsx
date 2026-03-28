import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const highlights = [
    {
      id: 1,
      title: 'Next-Gen Graphics',
      description: 'Powered by Source 2 engine for stunning visuals',
      icon: '🎮'
    },
    {
      id: 2,
      title: 'Competitive Play',
      description: 'Master complex strategies and outplay opponents',
      icon: '⚔️'
    },
    {
      id: 3,
      title: 'Esports Ready',
      description: 'Professional tournament infrastructure built-in',
      icon: '🏆'
    },
    {
      id: 4,
      title: 'Regular Updates',
      description: '128-tick servers with continuous improvements',
      icon: '🚀'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-animated-boxes">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1>ENTER THE WORLD OF CS2</h1>
            <p className="hero-subtitle">
              Master precision. Dominate strategy. Become a legend in the ultimate competitive FPS experience. Made by Kevin
            </p>

            <div className="hero-buttons">
              <Link to="/gameplay" className="btn btn-primary">
                EXPLORE
              </Link>
              <Link to="/media" className="btn btn-secondary">
                WATCH GAMEPLAY
              </Link>
            </div>
          </div>
        </div>

        <div className="hero-bottom-glow"></div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">
            WHY CS2 STANDS OUT
          </h2>
          <p className="section-subtitle text-center mb-12">
            Discover what makes Counter-Strike 2 the premier competitive FPS
          </p>

          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className="highlight-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="highlight-icon">{highlight.icon}</div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2 className="fade-in-up">Ready to Compete?</h2>
          <p className="cta-subtitle fade-in-up" style={{ animationDelay: '0.1s' }}>
            Join thousands of competitive players in the most thrilling esports experience
          </p>

          <div className="cta-buttons fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/about" className="btn btn-primary">
              LEARN MORE
            </Link>
            <Link to="/contact" className="btn btn-outline">
              GET IN TOUCH
            </Link>
          </div>
        </div>

        <div className="cta-background">
          <div className="cta-glow"></div>
        </div>
      </section>
    </div>
  );
}