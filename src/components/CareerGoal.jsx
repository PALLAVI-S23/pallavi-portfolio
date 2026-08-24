import React from 'react';
import { Target, HelpCircle, CalendarCheck, Wrench, Sparkles, Quote, Award } from 'lucide-react';
import { careerGoalData } from '../data/portfolioData';

export default function CareerGoal() {
  const iconMap = {
    HelpCircle: <HelpCircle size={22} color="#38bdf8" />,
    CalendarCheck: <CalendarCheck size={22} color="#34d399" />,
    Wrench: <Wrench size={22} color="#fbbf24" />
  };

  return (
    <section id="career" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="dot"></span>
            <span>Professional Mission</span>
          </div>
          <h2 className="section-title">
            Career <span className="gradient-text">Goal</span>
          </h2>
          <p className="subheading-text">
            My guiding compass, commitment to gradual mastery, and long-term data science aspiration.
          </p>
        </div>

        <div className="career-card-wrapper">
          {/* Main Card with Statement and Approach */}
          <div className="career-main-card">
            <div className="career-statement">
              "{careerGoalData.statement}"
            </div>

            <p className="career-approach">
              {careerGoalData.approach}
            </p>

            {/* Core Values Grid */}
            <div className="career-values-grid" style={{ marginTop: '12px' }}>
              {careerGoalData.coreValues.map((val, idx) => (
                <div key={idx} className="career-value-item">
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {iconMap[val.icon] || <Sparkles size={20} />}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '2px' }}>
                      {val.title}
                    </h4>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlighted Quote Banner */}
          <div className="career-highlight-banner">
            <div className="career-highlight-quote">
              "{careerGoalData.highlightQuote}"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
