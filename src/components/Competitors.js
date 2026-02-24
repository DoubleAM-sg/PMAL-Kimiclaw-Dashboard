import React, { useState } from 'react';

function Competitors() {
  const [activeTab, setActiveTab] = useState('aggregators');

  const categories = {
    aggregators: {
      title: 'Loan Aggregators',
      description: 'Multiple lenders, run ads',
      competitors: [
        { id: 'lendela', name: 'Lendela', url: 'https://lendela.sg', fbAds: 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=lendela' },
        { id: 'lendingpot', name: 'Lendingpot', url: 'https://lendingpot.sg', fbAds: 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=lendingpot' },
        { id: 'roshi', name: 'Roshi', url: 'https://roshi.sg', fbAds: 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=roshi' },
        { id: 'moneykinetics', name: 'Money Kinetics', url: 'https://moneykinetics.sg', fbAds: 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=money%20kinetics' },
        { id: 'lendify', name: 'Lendify', url: 'https://lendify.sg', fbAds: 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=lendify' },
        { id: 'lendingcircle', name: 'Lending Circle', url: 'https://lendingcircle.com.sg', fbAds: 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=lending%20circle' },
        { id: 'sgcredits', name: 'SG Credits', url: 'https://sg-credits.com', fbAds: 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=sg%20credits' },
      ]
    },
    brokers: {
      title: 'Loan Brokers',
      description: 'Connect to specific lenders',
      competitors: [
        { id: 'loanova', name: 'Loanova', url: 'https://loanova.com.sg', fbAds: 'https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=SG&q=loanova' },
      ]
    },
    lenders: {
      title: 'Licensed Moneylenders',
      description: 'No ads (illegal), track website only',
      competitors: [
        { id: 'crawfort', name: 'Crawfort', url: 'https://www.crawfort.com' },
        { id: 'lendingbee', name: 'Lending Bee', url: 'https://www.lendingbee.com.sg' },
        { id: 'accredit', name: 'Accredit', url: 'https://www.accreditloan.com' },
        { id: 'credit21', name: 'Credit 21', url: 'https://www.credit21.com.sg' },
        { id: 'credit33', name: 'Credit Thirty3', url: 'https://www.creditthirty3.com.sg' },
        { id: 'creditmaster', name: 'Credit Master', url: 'https://www.creditmaster.sg' },
        { id: 'gscredit', name: 'GS Credit', url: 'https://www.gscredit.com.sg' },
        { id: 'ucredit', name: 'U Credit', url: 'https://www.ucredit.sg' },
        { id: 'horison', name: 'Horison Credit', url: 'https://www.horisonmoneylender.com.sg' },
        { id: 'katong', name: 'Katong Credit', url: 'https://www.katongcredit.com.sg' },
        { id: 'bst', name: 'BST Credit', url: 'https://www.bstcredit.com.sg' },
        { id: 'creditmatters', name: 'Credit Matters', url: 'https://www.creditmatters.com.sg' },
        { id: '1apcapital', name: '1AP Capital', url: 'https://www.1apcapital.com.sg' },
      ]
    }
  };

  const currentCategory = categories[activeTab];

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

      <div className="competitors-grid">
        {currentCategory.competitors.map(comp => (
          <div key={comp.id} className="competitor-card">
            <h3>{comp.name}</h3>
            
            <div className="competitor-links">
              <a 
                href={comp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="comp-link"
              >
                View Site →
              </a>
              
              {comp.fbAds && (
                <a 
                  href={comp.fbAds}
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
    </div>
  );
}

export default Competitors;