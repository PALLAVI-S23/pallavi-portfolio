import React from 'react';
import { CheckCircle2, Compass, Rocket, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { learningJourneyData } from '../data/portfolioData';

export default function LearningJourney() {
  const statusBadges = {
    emerald: { bg: 'rgba(16, 185, 129, 0.12)', color: '#34d399', border: 'rgba(16, 185, 129, 0.3)' },
    cyan: { bg: 'rgba(56, 189, 248, 0.12)', color: '#38bdf8', border: 'rgba(56, 189, 248, 0.3)' },
    indigo: { bg: 'rgba(99, 102, 241, 0.12)', color: '#818cf8', border: 'rgba(99, 102, 241, 0.3)' }
  };

  return (
    <section id="journey" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="dot"></span>
            <span>Progressive Roadmap</span>
          </div>
          <h2 className="section-title">
            My Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="subheading-text">
            "{learningJourneyData.overview}"
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="journey-timeline">
          {learningJourneyData.stages.map((stage, idx) => {
            const badgeStyle = statusBadges[stage.statusColor] || statusBadges.cyan;

            return (
              <div key={idx} className="journey-stage-card">
                {/* Stage Header */}
                <div className="stage-header-row">
                  <div className="stage-badge-group">
                    <span className="stage-number">{stage.stage}</span>
                    <h3 className="stage-title" style={{ margin: 0 }}>
                      {stage.title}
                    </h3>
                  </div>

                  <span 
                    className="badge"
                    style={{
                      backgroundColor: badgeStyle.bg,
                      color: badgeStyle.color,
                      borderColor: badgeStyle.border
                    }}
                  >
                    {stage.statusColor === 'emerald' ? (
                      <CheckCircle2 size={13} />
                    ) : stage.statusColor === 'cyan' ? (
                      <Compass size={13} />
                    ) : (
                      <Rocket size={13} />
                    )}
                    {stage.status}
                  </span>
                </div>

                <p className="stage-desc">{stage.description}</p>

                {/* Topics / Competencies in this Stage */}
                <div className="stage-items-grid">
                  {stage.items.map((item, iIdx) => (
                    <div key={iIdx} className="stage-item">
                      <div className="stage-item-name">{item.name}</div>
                      <div className="stage-item-desc">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Trajectory Milestone Summary Banner */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          padding: '20px',
          background: 'rgba(56, 189, 248, 0.04)',
          border: '1px dashed rgba(56, 189, 248, 0.25)',
          borderRadius: 'var(--radius-lg)',
          maxWidth: '800px',
          margin: '40px auto 0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--accent-cyan)', fontWeight: '600', marginBottom: '6px' }}>
            <Sparkles size={18} />
            <span>Continuous Evolution Toward Data Science</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
            Strengthening core syntax & databases ➔ Mastering statistical data analysis & visualizations ➔ Engineering machine learning intelligence models.
          </p>
        </div>
      </div>
    </section>
  );
}
