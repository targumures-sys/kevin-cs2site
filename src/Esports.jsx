import React from 'react';
import './Esports.css';

export default function Esports() {
  const tournaments = [
    {
      id: 1,
      name: 'International Championship',
      prize: '$2M+',
      region: 'Global',
      status: 'Upcoming'
    },
    {
      id: 2,
      name: 'Pro League Season 19',
      prize: '$1M',
      region: 'Global',
      status: 'Live'
    },
    {
      id: 3,
      name: 'Regional Clash',
      prize: '$500K',
      region: 'Europe',
      status: 'Upcoming'
    },
    {
      id: 4,
      name: 'Americas Cup',
      prize: '$300K',
      region: 'Americas',
      status: 'Live'
    }
  ];

  const topTeams = [
    {
      rank: 1,
      name: 'The Silent Aces',
      region: '🇩🇪',
      wins: 87,
      avgRating: '1.28'
    },
    {
      rank: 2,
      name: 'Nordic Legion',
      region: '🇸🇪',
      wins: 82,
      avgRating: '1.24'
    },
    {
      rank: 3,
      name: 'Phoenix Rising',
      region: '🇺🇸',
      wins: 79,
      avgRating: '1.19'
    },
    {
      rank: 4,
      name: 'Dragon Slayers',
      region: '🇰🇷',
      wins: 76,
      avgRating: '1.17'
    },
    {
      rank: 5,
      name: 'Cyber Warriors',
      region: '🇧🇷',
      wins: 73,
      avgRating: '1.14'
    }
  ];

  const stats = [
    {
      label: 'Pro Players',
      value: '5,000+',
      icon: '👥'
    },
    {
      label: 'Tournaments/Month',
      value: '50+',
      icon: '🏆'
    },
    {
      label: 'Prize Pool/Year',
      value: '$50M+',
      icon: '💰'
    },
    {
      label: 'Countries',
      value: '150+',
      icon: '🌍'
    }
  ];

  return (
    <div className="esports">
      {/* Hero Section */}
      <section className="esports-hero">
        <div className="container">
          <h1 className="fade-in-down">COMPETITIVE ESPORTS</h1>
          <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.1s' }}>
            Experience the highest level of competitive Counter-Strike gaming
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tournaments */}
      <section className="tournaments-section">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">MAJOR TOURNAMENTS</h2>
          <p className="section-subtitle text-center mb-12">
            The biggest esports events in Counter-Strike 2
          </p>

          <div className="tournaments-grid">
            {tournaments.map((tournament, index) => (
              <div
                key={tournament.id}
                className="tournament-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="tournament-header">
                  <h3>{tournament.name}</h3>
                  <span className={`status-badge ${tournament.status.toLowerCase()}`}>
                    {tournament.status}
                  </span>
                </div>
                <div className="tournament-details">
                  <div className="detail-row">
                    <span className="label">Prize Pool:</span>
                    <span className="value prize">{tournament.prize}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Region:</span>
                    <span className="value">{tournament.region}</span>
                  </div>
                </div>
                <button className="btn btn-secondary btn-small">Watch</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Teams Ranking */}
      <section className="teams-section">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">TOP TEAMS RANKING</h2>
          <p className="section-subtitle text-center mb-12">
            The best competitive teams in the world
          </p>

          <div className="leaderboard">
            {topTeams.map((team, index) => (
              <div
                key={team.rank}
                className="leaderboard-row"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className={`rank rank-${team.rank}`}>#{team.rank}</div>
                <div className="team-info">
                  <div className="team-name">
                    <span className="region">{team.region}</span>
                    <span className="name">{team.name}</span>
                  </div>
                </div>
                <div className="team-stats">
                  <div className="stat">
                    <span className="stat-label">Wins</span>
                    <span className="stat-value">{team.wins}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Rating</span>
                    <span className="stat-value">{team.avgRating}</span>
                  </div>
                </div>
                <button className="btn btn-outline btn-small">View</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="news-section">
        <div className="container">
          <h2 className="section-title text-center fade-in-down">LATEST UPDATES</h2>
          <p className="section-subtitle text-center mb-12">
            Stay updated with the competitive scene
          </p>

          <div className="news-grid">
            {[
              {
                title: 'New Champion Crowned',
                date: 'Mar 28, 2026',
                category: 'Tournament',
                icon: '📰'
              },
              {
                title: 'Pro Player Transfers',
                date: 'Mar 26, 2026',
                category: 'Teams',
                icon: '📋'
              },
              {
                title: 'Patch 3.2 Released',
                date: 'Mar 24, 2026',
                category: 'Updates',
                icon: '🔧'
              }
            ].map((news, index) => (
              <div
                key={index}
                className="news-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="news-icon">{news.icon}</div>
                <h4>{news.title}</h4>
                <p className="news-date">{news.date}</p>
                <span className="news-category">{news.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="esports-cta">
        <div className="container text-center">
          <h2 className="fade-in-up">Join the Competitive Scene</h2>
          <p className="fade-in-up mb-8" style={{ animationDelay: '0.1s' }}>
            Train, compete, and become a pro player in the world's biggest esports ecosystem
          </p>
        </div>
      </section>
    </div>
  );
}
