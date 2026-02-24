import React from 'react';

function Ads({ adSnapshots }) {
  return (
    <div className="ads">
      <h2>Ad Intelligence</h2>
      
      <div className="ads-summary">
        <div className="summary-card">
          <div className="summary-number">{adSnapshots.length}</div>
          <div className="summary-label">Ads Tracked Today</div>
        </div>
        
        <div className="summary-card">
          <div className="summary-number">{new Set(adSnapshots.map(a => a.competitor)).size}</div>
          <div className="summary-label">Active Advertisers</div>
        </div>
      </div>

      <div className="ads-grid">
        {adSnapshots.map((ad, index) => (
          <div key={index} className="ad-card">
            <div className="ad-header">
              <span className="ad-competitor">{ad.competitor}</span>
              <span className="ad-type">{ad.type}</span>
            </div>
            
            <div className="ad-screenshot-placeholder">
              <div className="screenshot-fallback">
                📸 Screenshot
                <br />
                <small>{ad.date}</small>
              </div>
            </div>
            
            <div className="ad-content">
              <div className="ad-message">"{ad.message}"</div>
              <div className="ad-cta">→ {ad.cta}</div>
            </div>
            
            <div className="ad-analysis">
              <strong>Analysis:</strong>
              <p>{analyzeAd(ad)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function analyzeAd(ad) {
  const analyses = {
    'Crawfort': 'Speed-focused messaging. "8 minutes" is specific and threatening to "instant" claims.',
    'Lendela': 'Emotional/seasonal campaign. CNY timing captures festive borrowing intent.',
    'Lending Bee': 'Trust + speed combo. Carousel format suggests multiple product showcase.',
    'Credit 21': 'Direct lender emphasizing speed and reliability.',
    'Money Kinetics': 'Scale-focused messaging (S$330M+ volume) builds credibility.',
    'Roshi': 'Review/comparison positioning. SEO play for research-phase borrowers.',
  };
  return analyses[ad.competitor] || 'Standard acquisition ad. Monitor for creative changes.';
}

export default Ads;