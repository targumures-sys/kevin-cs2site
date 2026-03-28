import React, { useState } from 'react';
import './Media.css';

export default function Media() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const allMedia = [
    { id: 1, type: 'image', category: 'gameplay', title: 'Intense Gunfire', emoji: '🎮' },
    { id: 2, type: 'image', category: 'esports', title: 'Championship Match', emoji: '🏆' },
    { id: 3, type: 'image', category: 'gameplay', title: 'Smoke Scout', emoji: '💨' },
    { id: 4, type: 'image', category: 'tournament', title: 'Pro Tournament', emoji: '🎬' },
    { id: 5, type: 'video', category: 'highlight', title: 'Crazy Clutch', emoji: '🎥' },
    { id: 6, type: 'image', category: 'skins', title: 'Weapon Skins', emoji: '🎨' },
    { id: 7, type: 'image', category: 'gameplay', title: 'Team Execution', emoji: '⚔️' },
    { id: 8, type: 'video', category: 'highlight', title: 'Epic Moments', emoji: '🔥' },
    { id: 9, type: 'image', category: 'esports', title: 'Finals Victory', emoji: '👑' },
  ];

  const filteredMedia = filter === 'all'
    ? allMedia
    : allMedia.filter(item => item.category === filter);

  return (
    <div className="media">
      {/* Hero Section */}
      <section className="media-hero">
        <div className="container">
          <h1 className="fade-in-down">MEDIA GALLERY</h1>
          <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.1s' }}>
            Stunning visuals and highlights from the world of Counter-Strike 2
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {['all', 'gameplay', 'esports', 'tournament', 'highlight', 'skins'].map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {filteredMedia.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="gallery-image">
                  <span className="item-emoji">{item.emoji}</span>
                  <div className="overlay">
                    <div className="overlay-content">
                      <span className="item-type">
                        {item.type === 'video' ? '▶️' : '📸'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="gallery-info">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <div className="lightbox-image">
              <span className="large-emoji">{selectedImage.emoji}</span>
            </div>
            <div className="lightbox-info">
              <h2>{selectedImage.title}</h2>
              <p>Category: {selectedImage.category}</p>
              <p className="media-type">
                {selectedImage.type === 'video' ? '🎥 Video Highlight' : '📷 Screenshot'}
              </p>
            </div>
            <div className="lightbox-controls">
              <button className="btn btn-secondary">Download</button>
              <button className="btn btn-outline">Share</button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="gallery-stats">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">CONTENT HIGHLIGHTS</h2>
          <p className="section-subtitle text-center mb-12">
            Browse our extensive collection of screenshots and videos
          </p>

          <div className="stats-grid">
            {[
              { icon: '📸', label: 'Screenshots', value: '1,000+' },
              { icon: '🎥', label: 'Video Clips', value: '500+' },
              { icon: '🎬', label: 'Documentaries', value: '50+' },
              { icon: '👁️', label: 'Total Views', value: '10M+' }
            ].map((stat, index) => (
              <div
                key={index}
                className="content-stat"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="stat-icon">{stat.icon}</span>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="featured-videos">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">FEATURED VIDEOS</h2>
          <p className="section-subtitle text-center mb-12">
            Watch the most exciting moments and tutorials
          </p>

          <div className="videos-grid">
            {[
              { title: 'Best Plays of 2026', duration: '12:34', views: '500K' },
              { title: 'Pro Player Tutorial', duration: '8:45', views: '300K' },
              { title: 'Championship Finals', duration: '2:45:30', views: '1.2M' }
            ].map((video, index) => (
              <div
                key={index}
                className="video-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="video-thumbnail">
                  <span className="play-button">▶️</span>
                  <span className="duration">{video.duration}</span>
                </div>
                <div className="video-info">
                  <h4>{video.title}</h4>
                  <p className="views">{video.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="upload-section">
        <div className="container text-center">
          <h2 className="fade-in-up">Share Your Highlights</h2>
          <p className="fade-in-up mb-8" style={{ animationDelay: '0.1s' }}>
            Have an epic moment? Share your gameplay clips and screenshots with the community
          </p>
          <button className="btn btn-primary fade-in-up" style={{ animationDelay: '0.2s' }}>
            SUBMIT MEDIA
          </button>
        </div>
      </section>
    </div>
  );
}
