import React from 'react';
import Overview from './Overview';
import Competitors from './Competitors';
import Ads from './Ads';
import Briefings from './Briefings';
import Analysis from './Analysis';

function Dashboard({ activeTab, data }) {
  switch (activeTab) {
    case 'overview':
      return <Overview data={data} />;
    case 'competitors':
      return <Competitors competitors={data.competitors} />;
    case 'ads':
      return <Ads adSnapshots={data.adSnapshots} />;
    case 'briefings':
      return <Briefings briefings={data.dailyBriefings} />;
    case 'analysis':
      return <Analysis data={data} />;
    default:
      return <Overview data={data} />;
  }
}

export default Dashboard;