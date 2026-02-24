import React, { useState } from 'react';

function Competitors({ data }) {
  const [activeTab, setActiveTab] = useState('aggregators');

  const categories = {
    aggregators: {
      title: 'Loan Aggregators',
      description: 'Multiple lenders, may run ads',
      competitors: data?.aggregators || []
    },
    brokers: {
      title: 'Loan Brokers',
      description: 'Connect to specific lenders',
      competitors: data?.brokers || []
    },
    lenders: {
      title: 'Licensed Moneylenders',
      description: 'No ads (illegal), track website only',
      competitors: data?.lenders || []
    }
  };

  const currentCategory = categories[activeTab];

  const getFBAdsUrl = (fbPage) => {
    if (!fbPage) return null;
    return `https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=${encodeURIComponent(fbPage)}`;
  };

  return (
    <div className="competitors-page">
      <h2>Competitors</h2>

      <div className="category-tabs">
        {Object.entries(categories).map(([key, cat]) => (
          <button
            key={key}
            className={activeTab === key ? 'active' : ''}
            onClick={() => setActiveTab(key)}
          >
            {cat.title}
            <span className="count">{cat.competitors.length}</span>
          </button>
        ))}
      </div>

      <div className="category-description">
        {currentCategory.description}
      </div>

      {currentCategory.competitors.length > 0 ? (
        <div className="competitors-grid">
          {currentCategory.competitors.map(comp => (
            <div key={comp.id} className="competitor-card">
              <h3>{comp.name}</h3>
              
              {comp.claim && (
                <div className="competitor-claim">
                  ⚡ {comp.claim}
                </div>
              )}
              
              <div className="competitor-links">
                <a 
                  href={comp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comp-link"
                >
                  View Site →
                </a>
                
                {comp.fbPage && (
                  <a 
                    href={getFBAdsUrl(comp.fbPage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comp-link fb"
                  >
                    FB Ads ↗
                  </a>
                )}
                
                <a 
                  href={`#info-${comp.id}`}
                  className="comp-link info"
                >
                  More Info →
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-competitors">No competitors in this category.</div>
      )}
    </div>
  );
}

export default Competitors;