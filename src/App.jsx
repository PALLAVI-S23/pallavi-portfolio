import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Strengths from './components/Strengths';
import LearningJourney from './components/LearningJourney';
import FutureVision from './components/FutureVision';
import WhatIWantToBuild from './components/WhatIWantToBuild';
import CareerGoal from './components/CareerGoal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('pallavi-portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('pallavi-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="portfolio-app">
      {/* Sticky Header Navigation */}
      <Navbar currentTheme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Strengths />
        <LearningJourney />
        <FutureVision />
        <WhatIWantToBuild />
        <CareerGoal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}
