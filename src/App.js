import React, { useState, useEffect } from 'react';
import Overview from './components/Overview';
import Competitors from './components/Competitors';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('overview');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Load data from JSON file
    fetch('/PMAL-Kimiclaw-Dashboard/data/intel.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load data:', err);
        setLoading(false);
      });

    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleString('en-SG', { 
      timeZone: 'Asia/Singapore',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Loading dashboard...⏳</div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">📊</span>
          <h1>PMAL Competitor Tracker</h1>
        </div>
        <nav className="nav">
          <button 
            className={currentPage === 'overview' ? 'active' : ''}
            onClick={() => setCurrentPage('overview')}
          >
            Overview
          </button>
          <button 
            className={currentPage === 'competitors' ? 'active' : ''}
            onClick={() => setCurrentPage('competitors')}
          >
            Competitors
          </button>
        </nav>
        <span className="last-updated">{formatTime(currentTime)} SGT</span>
      </header>

      <main className="main">
        {data && currentPage === 'overview' && <Overview data={data} />}
        {data && currentPage === 'competitors' && <Competitors data={data.competitors} />}
      </main>

      <footer className="footer">
        <p>Data verified: {data?.lastUpdated ? new Date(data.lastUpdated).toLocaleString('en-SG') : 'Unknown'} · Click ✅ Done to send update to Telegram</p>
      </footer>
    </div>
  );
}

export default App;