import React from 'react';

function Analysis({ data }) {
  const speedClaims = [
    { competitor: 'Crawfort', claim: '8 minutes', threat: 'critical' },
    { competitor: 'Katong Credit', claim: '8 minutes', threat: 'critical' },
    { competitor: 'Credit Thirty3', claim: '25 minutes', threat: 'high' },
    { competitor: 'Lending Circle', claim: '30 minutes', threat: 'high' },
    { competitor: 'Lending Bee', claim: '1 hour', threat: 'medium' },
    { competitor: 'Credit Matters', claim: '1 hour', threat: 'medium' },
  ];

  return (
    <div className="analysis">
      <h2>Strategic Analysis</h2>
      
      <div className="analysis-section">
        <h3>⚡ Speed Claims Comparison</h3>
        <div className="speed-claims-table">
          <table>
            <thead>
              <tr>
                <th>Competitor</th>
                <th>Speed Claim</th>
                <th>Threat Level</th>
              </tr>
            </thead>
            <tbody>
              {speedClaims.map((item, index) => (
                <tr key={index} className={item.threat}>
                  <td>{item.competitor}</td>
                  <td>{item.claim}</td>
                  <td>
                    <span className={`threat-badge ${item.threat}`}>
                      {item.threat.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="analysis-section">
        <h3>💡 Strategic Recommendations</h3>
        
        <div className="recommendations">
          <div className="recommendation priority-high">
            <div className="rec-header">
              <span className="rec-priority">HIGH</span>
              <h4>Quantify "Instant Approval"</h4>
            </div>
            <p>
              Crawfort's "8 minutes" is beating your "instant" claim. 
              Consider: "Approved in 5 minutes or less" or "60-second application, 
              5-minute approval."
            </p>
          </div>
          
          <div className="recommendation priority-high">
            <div className="rec-header">
              <span className="rec-priority">HIGH</span>
              <h4>Differentiate on Guarantee</h4>
            </div>
            <p>
              No competitor offers a speed guarantee. Consider: 
              "Approval in 5 min or $50 cashback" - turns speed into a promise.
            </p>
          </div>
          
          <div className="recommendation priority-medium">
            <div className="rec-header">
              <span className="rec-priority">MEDIUM</span>
              <h4>End-to-End Speed</h4>
            </div>
            <p>
              Competitors focus on approval speed. Differentiate on 
              disbursement speed: "Approved &amp; cash in account in 10 minutes."
            </p>
          </div>
          
          <div className="recommendation priority-medium">
            <div className="rec-header">
              <span className="rec-priority">MEDIUM</span>
              <h4>Partner Exclusivity</h4>
            </div>
            <p>
              Highlight EZ Loan &amp; Best Licensed Money Lender as 
              curated, exclusive partners vs. Lendela's "70+ partners" 
              (quality vs quantity positioning).
            </p>
          </div>
        </div>
      </div>

      <div className="analysis-section">
        <h3>🎯 Opportunity Gaps</h3>
        
        <ul className="opportunities">
          <li><strong>Cashback + Speed Combo:</strong> No competitor is doing both</li>
          <li><strong>Approval Rate Marketing:</strong> Roshi's "97%" - can you beat this?</li>
          <li><strong>Multi-language Support:</strong> Loanova serves 4 languages</li>
          <li><strong>Content/SEO:</strong> Roshi dominates reviews - opportunity for PickMeALoan</li>
          <li><strong>Transparency:</strong> Real-time application tracking</li>
        </ul>
      </div>
    </div>
  );
}

export default Analysis;