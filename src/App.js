import React, { useState, useEffect } from 'react';
import Overview from './components/Overview';
import Competitors from './components/Competitors';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
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
        {currentPage === 'overview' && <Overview />}
        {currentPage === 'competitors' && <Competitors />}
      </main>

      <footer className="footer">
        <p>Click ✅ Done on actions to send update to Telegram</p>
      </footer>
    </div>
  );
}

export default App;