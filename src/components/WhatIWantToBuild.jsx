import React from 'react';
import { Database, Code, Compass, Sparkles, Layers, Target } from 'lucide-react';
import { whatIWantToBuildData } from '../data/portfolioData';

export default function WhatIWantToBuild() {
  const iconMap = {
    Database: <Database size={24} />,
    Code: <Code size={24} />,
    Compass: <Compass size={24} />
  };

  return (
    <section id="build" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="dot"></span>
            <span>Project Aspirations</span>
          </div>
          <h2 className="section-title">
            What I Want <span className="gradient-text">to Build</span>
          </h2>
          <p className="subheading-text">
            My commitment to transitioning academic concepts into high-impact, real-world data systems.
          </p>
        </div>

        <div className="build-section-wrapper">
          {/* Visual Centerpiece Banner */}
          <div className="centerpiece-banner">
            <div className="centerpiece-text">
              {whatIWantToBuildData.centerpiece}
            </div>
          </div>

          {/* Narrative Card */}
          <div className="build-narrative-card">
            {whatIWantToBuildData.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* 3 Foundational Pillars */}
          <div className="build-pillars-grid">
            {whatIWantToBuildData.pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon-wrap">
                  {iconMap[pillar.icon] || <Sparkles size={24} />}
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
