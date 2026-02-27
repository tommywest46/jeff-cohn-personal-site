import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import AsSeenIn from './components/AsSeenIn';
import Protocol from './components/Protocol';
import Connect from './components/Connect';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-dark selection:bg-accent/30 selection:text-primary overflow-x-hidden">
      <div className="noise-overlay"></div>
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <AsSeenIn />
      <Protocol />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
