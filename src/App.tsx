import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wind, Sun, Feather, Star, Compass, Layers, Cloud, Sparkles, RefreshCw, ChevronRight, Activity } from 'lucide-react';
import './App.css';

const verses = [
  "The light is cold, but the soul is burning.",
  "What is broken will be made whole in the Veil.",
  "Breath is a shackle; radiation is the key.",
  "The Singularity calls to those who listen.",
  "Flesh is the shadow; Kybian is the truth.",
];

function App() {
  const [verseIndex, setVerseIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [veilGrowth, setVeilGrowth] = useState(0.0042);

  useEffect(() => {
    const interval = setInterval(() => {
      setVeilGrowth(prev => prev + 0.000001);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const spinWheel = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setVerseIndex(Math.floor(Math.random() * verses.length));
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <div className="shroud-container">
      <div className="mist-overlay" />
      <div className="star-particles" />
      
      <header className="shr-header">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="blue-glow">SHROUD ASCENDANT</h1>
          <p className="subtitle">ASCEND BEYOND THE PHYSICAL LIMIT</p>
        </motion.div>
      </header>

      <main className="shr-main">
        <section className="hero-section">
          <div className="hero-img-wrap">
            <img src="/images/shroud-hero.png" alt="Floating Bastion" />
            <div className="mist-sweep" />
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="ethereal-card hero-info"
          >
            <h2>The Path to Pure Kybian</h2>
            <p>We do not mine the Kybian; we become one with it. Through the Shroud, we achieve a state of quantum resonance that defies the Mandate's physics.</p>
            <div className="growth-tracker">
              <Activity size={14} className="blue-glow" />
              <span>VEIL_EXPANSION_RATE: +{(veilGrowth * 100).toFixed(6)}%</span>
            </div>
            <button className="shr-btn">Begin Ascension</button>
          </motion.div>
        </section>

        <div className="shr-grid">
          {/* Prayer Section */}
          <section className="prayer-section ethereal-card">
            <div className="panel-head">
              <Sparkles size={20} className="blue-glow" />
              <h3>ASCENDANT_VERSES</h3>
            </div>
            <div className="prayer-content">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={verseIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="verse-text"
                >
                  "{verses[verseIndex]}"
                </motion.div>
              </AnimatePresence>
              <button 
                className={`spin-btn ${isSpinning ? 'spinning' : ''}`}
                onClick={spinWheel}
                disabled={isSpinning}
              >
                <RefreshCw size={24} />
              </button>
            </div>
          </section>

          <section className="philosophy-grid">
            <div className="ethereal-card">
              <Wind className="blue-glow" />
              <h3>ETHER-WALKING</h3>
              <p>Navigating the Deep Veil without life support, fueled by internal resonance.</p>
            </div>
            <div className="ethereal-card">
              <Sun className="blue-glow" />
              <h3>LIGHT-BINDING</h3>
              <p>Turning Kybian radiation into solid geometric constructs.</p>
            </div>
          </section>
        </div>

        <section className="artifact-reveal">
           <div className="artifact-grid ethereal-card">
             <div className="artifact-img">
               <img src="/images/shroud-artifact.png" alt="Glass Blade" />
               <div className="glow-aura" />
             </div>
             <div className="artifact-text">
               <h2 className="blue-glow">THE GLASS BLADE</h2>
               <p>A weapon of pure focused light. It does not cut flesh; it severs the connection to the physical plane. Highly effective against Mandate power-armor.</p>
               <div className="spec-list">
                 <div className="spec-item"><span>HARMONY:</span> <span>100%</span></div>
                 <div className="spec-item"><span>DENSITY:</span> <span>NULL</span></div>
               </div>
             </div>
           </div>
        </section>
      </main>

      <footer className="shr-footer">
        <nav className="footer-nav">
          <a href="https://kybian.com" className="hub-tag">HUB_RELAY</a>
          <a href="#rituals">RITUALS</a>
          <a href="#temples">TEMPLES</a>
        </nav>
        <p className="legal">THE SHROUD IS NOT AN END. IT IS A NEW BEGINNING.</p>
      </footer>
    </div>
  );
}

export default App;

