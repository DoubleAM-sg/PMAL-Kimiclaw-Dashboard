import React from 'react';

function Overview({ data }) {
  const criticalThreats = data.competitors.filter(c => c.threat === 'critical').length;
  const highThreats = data.competitors.filter(c => c.threat === 'high').length;
  const totalChanges = data.dailyBriefings.reduce((sum, b) => sum + b.changes, 0);

  return (
    <div className="overview">
      <h2>Dashboard Overview</h2>
      
      <div className="stats-grid">
        <div className="stat-card critical">
          <div className="stat-number">{criticalThreats}</div>
          <div className="stat-label">Critical Threats</div>
        </div>
        
        <div className="stat-card warning">
          <div className="stat-number">{highThreats}</div>
          <div className="stat-label">High Threats</div>
        </div>
        
        <div className="stat-card info">
          <div className="stat-number">{data.competitors.length}</div>
          <div className="stat-label">Tracked Competitors</div>
        </div>
        
        <div className="stat-card success">
          <div className="stat-number">{totalChanges}</div>
          <div className="stat-label">Changes This Week</div>
        </div>
      </div>

      <div className="section">
        <h3>🔥 Critical Alerts</h3>
        <div className="alert-list">
          <div className="alert critical">
            <span className="alert-icon">⚡</span>
            <div>
              <strong>Crawfort:</strong> Pushing "8-minute approval" - fastest claim in market
            </div>
          </div>
          <div className="alert warning">
            <span className="alert-icon">📢</span>
            <div>
              <strong>Lendela:</strong> Launched CNY campaign with "Ang Bao Rates"
            </div>
          </div>
          <div className="alert info">
            <span className="alert-icon">💰</span>
            <div>
              <strong>ROSHI:</strong> Claims S$1M+ cashback returned to borrowers
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>📈 Quick Stats</h3>
        <div className="quick-stats">
          <div className="quick-stat">
            <div className="quick-label">Aggregators</div>
            <div className="quick-value">{data.competitors.filter(c => c.type === 'aggregator').length}</div>
          </div>
          <div className="quick-stat">
            <div className="quick-label">Direct Lenders</div>
            <div className="quick-value">{data.competitors.filter(c => c.type === 'direct').length}</div>
          </div>
          <div className="quick-stat">
            <div className="quick-label">New Ads Today</div>
            <div className="quick-value">{data.dailyBriefings[0]?.newAds || 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;