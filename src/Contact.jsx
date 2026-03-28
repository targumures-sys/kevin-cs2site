import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const communityLinks = [
    {
      icon: '💬',
      name: 'Discord',
      description: 'Join our active community server',
      url: '#'
    },
    {
      icon: '𝕏',
      name: 'Twitter',
      description: 'Follow for the latest updates',
      url: '#'
    },
    {
      icon: '▶️',
      name: 'YouTube',
      description: 'Watch tutorials and highlights',
      url: '#'
    },
    {
      icon: '📺',
      name: 'Twitch',
      description: 'Watch live tournaments',
      url: '#'
    },
    {
      icon: '📸',
      name: 'Instagram',
      description: 'Share your best moments',
      url: '#'
    },
    {
      icon: '🎮',
      name: 'Reddit',
      description: 'Join the discussion',
      url: '#'
    }
  ];

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="fade-in-down">GET IN TOUCH</h1>
          <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.1s' }}>
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-content">
            {/* Form */}
            <div className="form-wrapper fade-in-left">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows="6"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info fade-in-right">
              <h2>Quick Info</h2>
              <div className="info-cards">
                {[
                  {
                    icon: '📧',
                    title: 'Email',
                    content: 'support@cs2nexus.com'
                  },
                  {
                    icon: '💬',
                    title: 'Discord',
                    content: 'Chat with us 24/7 on our Discord server'
                  },
                  {
                    icon: '🌍',
                    title: 'Global',
                    content: 'Supporting players worldwide'
                  }
                ].map((info, index) => (
                  <div key={index} className="info-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="info-icon">{info.icon}</span>
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">JOIN OUR COMMUNITY</h2>
          <p className="section-subtitle text-center mb-12">
            Connect with thousands of players from around the world
          </p>

          <div className="community-grid">
            {communityLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="community-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="community-icon">{link.icon}</div>
                <h3>{link.name}</h3>
                <p>{link.description}</p>
                <span className="arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="section-subtitle text-center mb-12">
            Common questions about Counter-Strike 2
          </p>

          <div className="faq-grid">
            {[
              {
                q: 'Is Counter-Strike 2 free to play?',
                a: 'Yes! Counter-Strike 2 is completely free-to-play, with optional cosmetic items available for purchase.'
              },
              {
                q: 'What are the system requirements?',
                a: 'CS2 runs on most systems with a modern graphics card. Visit our official site for detailed specs.'
              },
              {
                q: 'How do I improve my rank?',
                a: 'Play competitive matches, watch pro players, learn utility usage, and practice your aim regularly.'
              },
              {
                q: 'Can I stream Counter-Strike 2?',
                a: 'Yes! Many players stream CS2 on Twitch and YouTube. Join our community streams and tournaments.'
              },
              {
                q: 'How do I report cheaters?',
                a: 'Use the in-game report feature or visit our support portal with detailed information.'
              },
              {
                q: 'Are there competitive tournaments?',
                a: 'Absolutely! We host numerous tournaments with prize pools ranging from casual to professional levels.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="faq-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <h4>{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container text-center">
          <h2 className="fade-in-up">Stay Updated</h2>
          <p className="fade-in-up mb-6" style={{ animationDelay: '0.1s' }}>
            Subscribe to our newsletter for the latest news and updates
          </p>
          <div className="newsletter-form fade-in-up" style={{ animationDelay: '0.2s' }}>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="btn btn-primary">SUBSCRIBE</button>
          </div>
        </div>
      </section>
    </div>
  );
}
