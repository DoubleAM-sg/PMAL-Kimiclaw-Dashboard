import React, { useState } from 'react';

function Competitors({ competitors }) {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('threat');

  const filtered = competitors.filter(c => 
    filter === 'all' ? true : c.type === filter
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'threat') {
      const threatOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      return threatOrder[a.threat] - threatOrder[b.threat];
    }
    return a.name.localeCompare(b.name);
  });

  const getThreatColor = (threat) => {
    switch (threat) {
      case 'critical': return '#dc2626';
      case 'high': return '#ea580c';
      case 'medium': return '#ca8a04';
      case 'low': return '#16a34a';
      default: return '#6b7280';
    }
  };

  return (
    <div className="competitors">
      <h2>Tracked Competitors</h2>
      
      <div className="filters">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Types</option>
          <option value="aggregator">Aggregators</option>
          <option value="direct">Direct Lenders</option>
        </select>
        
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="threat">Sort by Threat</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>

      <div className="competitor-grid">
        {sorted.map(comp => (
          <div key={comp.id} className="competitor-card">
            <div className="competitor-header">
              <h3>{comp.name}</h3>
              <span 
                className="threat-badge"
                style={{ backgroundColor: getThreatColor(comp.threat) }}
              >
                {comp.threat.toUpperCase()}
              </span>
            </div>
            
            <div className="competitor-meta">
              <span className="type-badge">{comp.type}</span>
              <span className="updated">Updated: {comp.lastUpdated}</span>
            </div>
            
            <div className="competitor-actions">
              <a 
                href={`https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=${encodeURIComponent(comp.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View FB Ads
              </a>
              <a 
                href={comp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Competitors;