import React, { useState } from 'react';

function Overview({ data }) {
  const [completedActions, setCompletedActions] = useState([]);

  const todayChanges = data?.todayChanges || [];
  const suggestedActions = data?.suggestedActions || [];
  const weekActivity = data?.weekActivity || [];

  const generateTelegramLink = (actionId, actionText) => {
    const message = `/done action-${actionId}: ${actionText}`;
    return `https://t.me/Clementteojr?text=${encodeURIComponent(message)}`;
  };

  const markDone = (actionId) => {
    setCompletedActions([...completedActions, actionId]);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'ads': return '📢';
      case 'content': return '📝';
      case 'messaging': return '💬';
      default: return '🔄';
    }
  };

  return (
    <div className="overview">
      <div className="briefing-header">
        <h2>Today's Briefing</h2>
        <span className="briefing-date">
          {data?.lastUpdated ? new Date(data.lastUpdated).toLocaleDateString('en-SG', { 
            month: 'short', day: 'numeric', year: 'numeric' 
          }) : 'Unknown date'}
        </span>
      </div>

      {todayChanges.length > 0 ? (
        <div className="changes-section">
          <h3>{todayChanges.length} Changes Detected</h3>
          
          <div className="changes-list">
            {todayChanges.map((change, idx) => (
              <div key={change.id} className="change-item">
                <div className="change-number">{idx + 1}</div>
                <div className="change-content">
                  <div className="change-header-row">
                    <span className="change-icon">{getTypeIcon(change.type)}</span>
                    <span className="change-competitor">{change.competitor}</span>
                    <span className="verified-badge">✓ Verified</span>
                  </div>
                  <div className="change-desc">{change.change}</div>
                  <div className="change-source">Source: {change.source}</div>
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
      ) : (
        <div className="changes-section">
          <h3>No Changes Today</h3>
          <p className="no-data">No competitor activity detected in the last 24 hours.</p>
        </div>
      )}

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
                    {action.context && (
                      <div className="action-context">{action.context}</div>
                    )}
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

      {weekActivity.length > 0 && (
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
          
          <button 
            className="view-all-link"
            onClick={() => document.querySelector('.nav button:last-child')?.click()}
          >
            View All Competitors →
          </button>
        </div>
      )}
    </div>
  );
}

export default Overview;