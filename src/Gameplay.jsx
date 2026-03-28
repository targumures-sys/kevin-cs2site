import React from 'react';
import './Gameplay.css';

export default function Gameplay() {
  const gameModes = [
    {
      id: 1,
      title: 'Competitive',
      description: 'The ultimate test of skill on maps designed for esports',
      icon: '🎯',
      details: '5v5, Best of 30 rounds, 128-tick servers'
    },
    {
      id: 2,
      title: 'Casual',
      description: 'Relaxed play with shorter matches and friendly fire off',
      icon: '🎮',
      details: '10v10, Best of 16 rounds, Unlimited respawns'
    },
    {
      id: 3,
      title: 'Deathmatch',
      description: 'Instant respawn chaos without objectives',
      icon: '💥',
      details: 'Free-for-all, 60 seconds, Weapons randomly distributed'
    }
  ];

  const weaponCategories = [
    {
      category: 'Pistols',
      weapons: ['USP-S', 'P250', 'Five-SeveN', 'CZ75'],
      icon: '🔫'
    },
    {
      category: 'SMGs',
      weapons: ['MP9', 'MAC-10', 'UMP-45', 'PP-Bizon'],
      icon: '💨'
    },
    {
      category: 'Rifles',
      weapons: ['AK-47', 'M4A4', 'M4A1-S', 'AUG', 'FAMAS'],
      icon: '🎖️'
    },
    {
      category: 'Shotguns',
      weapons: ['MAG-7', 'XM1014', 'Sawed-Off', 'Nova'],
      icon: '🔥'
    },
    {
      category: 'Grenades',
      weapons: ['High Explosive', 'Smoke Grenade', 'Molotov', 'Decoy'],
      icon: '💣'
    },
    {
      category: 'Utility',
      weapons: ['Knife', 'C4', 'Radar Scanner'],
      icon: '⚔️'
    }
  ];

  const maps = [
    {
      name: 'Mirage',
      type: 'Iconic',
      description: 'Desert village with classic three-lane design',
      image: '🏜️'
    },
    {
      name: 'Inferno',
      type: 'Tactical',
      description: 'Italian village with vertical gameplay',
      image: '🔴'
    },
    {
      name: 'Nuke',
      type: 'Complex',
      description: 'Two-level industrial facility',
      image: '☢️'
    },
    {
      name: 'Vertigo',
      type: 'Elevated',
      description: 'Rooftop battle on corporate skyscraper',
      image: '🏢'
    },
    {
      name: 'Dust 2',
      type: 'Classic',
      description: 'Simple and fast-paced desert map',
      image: '🏜️'
    },
    {
      name: 'Anubis',
      type: 'Ancient',
      description: 'Egyptian ruins with unique architecture',
      image: '🗿'
    }
  ];

  return (
    <div className="gameplay">
      {/* Hero Section */}
      <section className="gameplay-hero">
        <div className="container">
          <h1 className="fade-in-down">MASTER THE GAMEPLAY</h1>
          <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.1s' }}>
            Learn the mechanics, strategies, and everything you need to dominate
          </p>
        </div>
      </section>

      {/* Game Modes Section */}
      <section className="game-modes-section">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">GAME MODES</h2>
          <p className="section-subtitle text-center mb-12">
            Choose your preferred playstyle and challenge level
          </p>

          <div className="modes-grid">
            {gameModes.map((mode, index) => (
              <div
                key={mode.id}
                className="mode-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mode-icon">{mode.icon}</div>
                <h3>{mode.title}</h3>
                <p className="mode-desc">{mode.description}</p>
                <div className="mode-details">
                  <p>{mode.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weapons Section */}
      <section className="weapons-section">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">WEAPONS ARSENAL</h2>
          <p className="section-subtitle text-center mb-12">
            Master an extensive arsenal of weapons for every situation
          </p>

          <div className="weapons-categories">
            {weaponCategories.map((category, index) => (
              <div
                key={index}
                className="weapon-category"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3>{category.category}</h3>
                </div>
                <div className="weapons-list">
                  {category.weapons.map((weapon, wIndex) => (
                    <div key={wIndex} className="weapon-item">
                      <span className="weapon-bullet">▸</span>
                      {weapon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maps Section */}
      <section className="maps-section">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">BATTLE ARENAS</h2>
          <p className="section-subtitle text-center mb-12">
            Epic maps designed for intense competitive gameplay
          </p>

          <div className="maps-grid">
            {maps.map((map, index) => (
              <div
                key={index}
                className="map-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="map-image">{map.image}</div>
                <div className="map-info">
                  <h4>{map.name}</h4>
                  <span className="map-type">{map.type}</span>
                  <p>{map.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">PRO TIPS FOR SUCCESS</h2>
          <p className="section-subtitle text-center mb-12">
            Essential strategies to improve your gameplay
          </p>

          <div className="tips-grid">
            {[
              { title: 'Economy Management', desc: 'Buy strategically to maximize rounds' },
              { title: 'Map Control', desc: 'Learn smokes and utility placement' },
              { title: 'Team Communication', desc: 'Coordinate with teammates effectively' },
              { title: 'Crosshair Placement', desc: 'Keep your crosshair at head level' },
              { title: 'Recoil Control', desc: 'Master weapon spray patterns' },
              { title: 'Position Awareness', desc: 'Know common enemy positions' }
            ].map((tip, index) => (
              <div
                key={index}
                className="tip-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <h4>{tip.title}</h4>
                <p>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
