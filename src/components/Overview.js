import React, { useState } from 'react';

function Overview({ data }) {
  const [completedActions, setCompletedActions] = useState([]);

  const todayChanges = data?.todayChanges || [
    { id: 1, competitor: 'Crawfort', change: 'New homepage claim: "5 min approval"', link: 'https://www.crawfort.com', linkText: 'View Site' },
    { id: 2, competitor: 'Lendela', change: 'CNY campaign launched on Facebook', link: 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=lendela', linkText: 'View FB Ads' },
    { id: 3, competitor: 'Lending Bee', change: 'Blog: "10 Loan Scam Red Flags"', link: 'https://www.lendingbee.com.sg/blog', linkText: 'Read Blog' },
  ];

  const suggestedActions = data?.suggestedActions || [
    { id: 1, text: 'Review Crawfort speed claim vs your "instant" positioning', priority: 'high' },
    { id: 2, text: 'Plan response to Lendela CNY promo before campaign ends', priority: 'medium' },
  ];

  const weekActivity = data?.weekActivity || [
    { day: 'Mon', competitor: 'Crawfort', change: 'site update' },
    { day: 'Sun', competitor: 'Lendela', change: 'ads' },
    { day: 'Fri', competitor: 'Lending Bee', change: 'blog' },
  ];

  const generateTelegramLink = (actionId, actionText) => {
    const message = `/done action-${actionId}: ${actionText}`;
    return `https://t.me/Clementteojr?text=${encodeURIComponent(message)}`;
  };

  const markDone = (actionId) => {
    setCompletedActions([...completedActions, actionId]);
  };

  return (
    <div className="overview">
      <div className="briefing-header">
        <h2>Today's Briefing</h2>
        <span className="briefing-date">{new Date().toLocaleDateString('en-SG', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
      </div>

      <div className="changes-section">
        <h3>{todayChanges.length} Changes Detected</h3>
        
        <div className="changes-list">
          {todayChanges.map((change, idx) => (
            <div key={change.id} className="change-item">
              <div className="change-number">{idx + 1}</div>
              <div className="change-content">
                <div className="change-competitor">{change.competitor}</div>
                <div className="change-desc">{change.change}</div>
                <a 
                  href={change.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="change-link"
                >
                  {change.linkText} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {suggestedActions.length > 0 && (
        <div className="actions-section">
          <h3>Suggested Actions</h3>
          
          <div className="actions-list">
            {suggestedActions.map(action => {
              const isDone = completedActions.includes(action.id);
              
              return (
                <div key={action.id} className={`action-item ${isDone ? 'completed' : ''} priority-${action.priority}`}>
                  <div className="action-checkbox">
                    {isDone ? '✓' : '○'}
                  </div>
                  <div className="action-content">
                    <div className="action-text">{action.text}</div>
                    {!isDone && (
                      <div className="action-buttons">
                        <a 
                          href={generateTelegramLink(action.id, action.text)}
                          className="action-btn done"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => markDone(action.id)}
                        >
                          ✅ Done
                        </a>
                      </div>
                    )}
                    {isDone && (
                      <span className="completed-label">Completed</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="week-section">
        <h3>This Week's Activity</h3>
        
        <div className="week-list">
          {weekActivity.map((item, idx) => (
            <div key={idx} className="week-item">
              <span className="week-day">{item.day}</span>
              <span className="week-competitor">{item.competitor}</span>
              <span className="week-change">{item.change}</span>
            </div>
          ))}
        </div>
        
        <a href="#competitors" className="view-all-link">View All Competitors →</a>
      </div>
    </div>
  );
}

export default Overview;