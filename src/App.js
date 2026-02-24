import React, { useState, useEffect } from 'react';
import './App.css';

// Verified competitor data from agent-browser scraping
const COMPETITOR_DATA = {
  lastUpdated: '2026-02-24T18:00:00+08:00',
  verifiedBy: 'agent-browser + kimi_fetch',
  
  aggregators: [
    { 
      id: 'lendela', 
      name: 'Lendela', 
      url: 'https://lendela.sg',
      fbPage: 'lendelaSG',
      adsActive: true,
      adCount: 42,
      adUrl: 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&id=1967211284147426',
      latestAd: 'Fast cars? Nice. Fast loan approvals? Even better.',
      adStartDate: '2026-01-19'
    },
    { 
      id: 'moneykinetics', 
      name: 'Money Kinetics', 
      url: 'https://moneykinetics.sg',
      fbPage: 'moneykineticssg',
      adsActive: true,
      adCount: 77,
      adUrl: 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&id=1445130156998804',
      latestAd: 'Achieve your dreams effortlessly! Up to $80,000',
      adStartDate: '2026-01-26'
    },
    { id: 'lendingpot', name: 'Lendingpot', url: 'https://lendingpot.sg', adsActive: false },
    { id: 'roshi', name: 'Roshi', url: 'https://roshi.sg', adsActive: false },
    { id: 'lendify', name: 'Lendify', url: 'https://lendify.sg', adsActive: false },
    { id: 'lendingcircle', name: 'Lending Circle', url: 'https://lendingcircle.com.sg', adsActive: false },
    { id: 'sgcredits', name: 'SG Credits', url: 'https://sg-credits.com', adsActive: false },
  ],
  
  brokers: [
    { id: 'loanova', name: 'Loanova', url: 'https://loanova.com.sg', adsActive: false },
  ],
  
  lenders: [
    { id: 'crawfort', name: 'Crawfort', url: 'https://www.crawfort.com' },
    { id: 'lendingbee', name: 'Lending Bee', url: 'https://www.lendingbee.com.sg' },
    { id: 'credit33', name: 'Credit Thirty3', url: 'https://www.creditthirty3.com.sg' },
    { id: 'katong', name: 'Katong Credit', url: 'https://www.katongcredit.com.sg' },
  ]
};

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleString('en-SG', { 
      timeZone: 'Asia/Singapore',
      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  const activeAggregators = COMPETITOR_DATA.aggregators.filter(a => a.adsActive);

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <div className="logo-mark">◈</div>
          <div className="brand-text">
            <div className="brand-name">PMAL INTELLIGENCE</div>
            <div className="brand-tagline">Competitive Monitoring System</div>
          </div>
        </div>
        <nav className="nav">
          {['overview', 'aggregators', 'lenders'].map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? 'active' : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </nav>
        <div className="status">
          <div className="status-indicator"></div>
          <span>{formatTime(currentTime)} SGT</span>
        </div>
      </header>

      <main className="main">
        {activeTab === 'overview' && (
          <div className="overview">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">{activeAggregators.length}</div>
                <div className="stat-label">Active Advertisers</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{activeAggregators.reduce((sum, a) => sum + (a.adCount || 0), 0)}</div>
                <div className="stat-label">Total Active Ads</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{COMPETITOR_DATA.lenders.length}</div>
                <div className="stat-label">Tracked Lenders</div>
              </div>
            </div>

            <div className="section">
              <h2>LATEST ADS</h2>
              <div className="ad-list">
                {activeAggregators.slice(0, 3).map(comp => (
                  <div key={comp.id} className="ad-item">
                    <div className="ad-competitor">{comp.name}</div>
                    <div className="ad-text">"{comp.latestAd}"</div>
                    <div className="ad-meta">
                      <span>{comp.adCount} ads active</span>
                      <span>Started {comp.adStartDate}</span>
                    </div>
                    {comp.adUrl && (
                      <a href={comp.adUrl} target="_blank" rel="noopener noreferrer" className="ad-link">
                        View Ad →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'aggregators' && (
          <div className="competitor-list">
            {COMPETITOR_DATA.aggregators.map(comp => (
              <div key={comp.id} className={`competitor-row ${comp.adsActive ? 'active' : ''}`}>
                <div className="row-main">
                  <div className="row-name">{comp.name}</div>
                  <div className="row-status">
                    {comp.adsActive && <span className="badge live">● LIVE</span>}
                    {!comp.adsActive && <span className="badge quiet">○ QUIET</span>}
                  </div>
                </div>
                <div className="row-actions">
                  <a href={comp.url} target="_blank" rel="noopener noreferrer" className="action">Site →</a>
                  {comp.adUrl && (
                    <a href={comp.adUrl} target="_blank" rel="noopener noreferrer" className="action fb">View Ad ↗</a>
                  )}
                  {!comp.adUrl && comp.fbPage && (
                    <a href={`https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=${comp.fbPage}`} target="_blank" rel="noopener noreferrer" className="action fb">Ads ↗</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'lenders' && (
          <div className="competitor-list">
            {COMPETITOR_DATA.lenders.map(comp => (
              <div key={comp.id} className="competitor-row">
                <div className="row-main">
                  <div className="row-name">{comp.name}</div>
                </div>
                <div className="row-actions">
                  <a href={comp.url} target="_blank" rel="noopener noreferrer" className="action">Site →</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="footer">
        <div className="footer-left">
          Data verified: {new Date(COMPETITOR_DATA.lastUpdated).toLocaleString('en-SG')}
        </div>
        <div className="footer-right">
          agent-browser + kimi_fetch
        </div>
      </footer>
    </div>
  );
}

export default App;