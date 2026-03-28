import React from 'react';
import './About.css';

export default function About() {
  const features = [
    {
      icon: '⚙️',
      title: 'Source 2 Engine',
      description: 'Next-generation engine delivering superior performance and visuals'
    },
    {
      icon: '🎨',
      title: 'Enhanced Graphics',
      description: 'Stunning visual updates with ray tracing support and dynamic lighting'
    },
    {
      icon: '📊',
      title: '128-Tick Servers',
      description: 'Sub-tick accuracy for precise competitive gameplay'
    },
    {
      icon: '💨',
      title: 'New Smoke System',
      description: 'Dynamic smoke grenades that react to movement and player interaction'
    },
    {
      icon: '🗺️',
      title: 'Classic Maps Redesigned',
      description: 'Reimagined iconic maps with fresh visuals and gameplay refinements'
    },
    {
      icon: '🎮',
      title: 'Improved Animation',
      description: 'Seamless character animations and weapon handling'
    }
  ];

  const timeline = [
    {
      year: '1999',
      title: 'The Beginning',
      description: 'Counter-Strike created as a mod for Half-Life'
    },
    {
      year: '2000',
      title: 'Community Growth',
      description: 'Became the most popular online multiplayer game'
    },
    {
      year: '2012',
      title: 'Global Offensive',
      description: 'CS:GO revolutionized competitive gaming'
    },
    {
      year: '2023',
      title: 'Counter-Strike 2',
      description: 'Free-to-play relaunch with Source 2 engine'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="fade-in-down">Counter-Strike 2: The Evolution</h1>
          <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.1s' }}>
            Discover the latest generation of competitive FPS gaming
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-section">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text fade-in-left">
              <h2>What is Counter-Strike 2?</h2>
              <p>
                Counter-Strike 2 is a free-to-play team-oriented tactical FPS that builds upon 
                decades of gameplay innovation. Built on the Source 2 engine, it redefines competitive 
                gaming with enhanced graphics, improved performance, and revolutionary new gameplay mechanics.
              </p>
              <p>
                Whether you're a casual player looking for thrilling matches or a professional 
                esports athlete competing at the highest levels, Counter-Strike 2 offers the perfect 
                arena to showcase your skills.
              </p>
            </div>
            <div className="overview-visual fade-in-right">
              <div className="visual-placeholder">
                <div className="visual-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">KEY FEATURES</h2>
          <p className="section-subtitle text-center mb-12">
            Experience the next generation of tactical gameplay
          </p>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">JOURNEY THROUGH HISTORY</h2>
          <p className="section-subtitle text-center mb-12">
            From mod to global phenomenon
          </p>

          <div className="timeline">
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{event.year}</h4>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container text-center">
          <h2 className="fade-in-up">Ready to Master the Game?</h2>
          <p className="fade-in-up mb-8" style={{ animationDelay: '0.1s' }}>
            Explore gameplay modes, strategies, and join the competitive community
          </p>
        </div>
      </section>
    </div>
  );
}
