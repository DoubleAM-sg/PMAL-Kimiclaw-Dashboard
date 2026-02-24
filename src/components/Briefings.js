import React from 'react';

function Briefings({ briefings }) {
  return (
    <div className="briefings">
      <h2>Daily Briefings</h2>
      
      <div className="briefings-list">
        {briefings.map((briefing, index) => (
          <div key={index} className="briefing-card">
            <div className="briefing-header">
              <div className="briefing-date">
                <span className="date-icon">📅</span>
                {briefing.date}
              </div>
              <div className="briefing-badges">
                {briefing.changes > 0 && (
                  <span className="badge changes">{briefing.changes} Changes</span>
                )}
                {briefing.newAds > 0 && (
                  <span className="badge new-ads">{briefing.newAds} New Ads</span>
                )}
              </div>
            </div>
            
            <div className="briefing-summary">
              {briefing.summary}
            </div>
            
            <div className="briefing-actions">
              <button className="btn">View Full Report</button>
              <button className="btn secondary">Download PDF</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Briefings;