import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Sun, Feather, Star, Compass, Layers, Cloud } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="shroud-container">
      <div className="mist-overlay" />
      
      <header className="shr-header">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="blue-glow">SHROUD ASCENDANT</h1>
          <p>ASCEND BEYOND THE PHYSICAL LIMIT</p>
        </motion.div>
      </header>

      <main className="shr-main">
        <section className="hero-section">
          <div className="hero-img-wrap">
            <img src="/images/shroud-hero.png" alt="Floating Bastion" />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="ethereal-card hero-info"
          >
            <h2>The Path to Pure Kybian</h2>
            <p>We do not mine the Kybian; we become one with it. Through the Shroud, we achieve a state of quantum resonance that defies the Mandate's physics.</p>
            <button className="shr-btn">Begin Ascension</button>
          </motion.div>
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
           <div className="ethereal-card">
             <Star className="blue-glow" />
             <h3>CELESTIAL_NAV</h3>
             <p>Mapping the Fracture through spiritual alignment.</p>
           </div>
        </section>

        <section className="artifact-reveal">
           <div className="artifact-grid">
             <div className="artifact-img">
               <img src="/images/shroud-artifact.png" alt="Glass Blade" />
             </div>
             <div className="artifact-text">
               <h2 className="blue-glow">THE GLASS BLADE</h2>
               <p>A weapon of pure focused light. It does not cut flesh; it severs the connection to the physical plane.</p>
               <div className="spec-tag">DENSITY: NULL</div>
             </div>
           </div>
        </section>
      </main>

      <footer className="shr-footer">
        <nav className="footer-nav">
          <a href="https://kybian.com">HUB</a>
          <a href="#rituals">RITUALS</a>
          <a href="#temples">TEMPLES</a>
        </nav>
        <p>THE SHROUD IS NOT AN END. IT IS A NEW BEGINNING.</p>
      </footer>
    </div>
  );
}

export default App;
