import React from 'react';
import { ArrowRight, Mail, FolderGit2, Sparkles, Terminal, Database, Code, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import DataVisual from './DataVisual';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Introductions and CTA */}
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={14} />
              <span>Aspiring Data Scientist & AI/DS Student</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="hero-subtitle">
              {personalInfo.title}
            </div>

            <p className="hero-description">
              "{personalInfo.heroIntro}"
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-group">
              <button 
                onClick={() => scrollTo('projects')} 
                className="btn btn-primary btn-lg"
              >
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => scrollTo('contact')} 
                className="btn btn-secondary btn-lg"
              >
                <Mail size={18} />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Tech Foundation Tags */}
            <div className="hero-quick-tags">
              <span className="quick-tag-label">Current Toolkit:</span>
              <span className="quick-tag-item">🐍 Python</span>
              <span className="quick-tag-item">⚙️ C</span>
              <span className="quick-tag-item">🗄️ MySQL</span>
              <span className="quick-tag-item">🐙 Git & GitHub</span>
              <span className="quick-tag-item">💻 VS Code</span>
            </div>
          </div>

          {/* Right Column: Abstract Tech & Data Visualization */}
          <div className="hero-visual-col">
            <DataVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
