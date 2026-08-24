import React from 'react';
import { MessageSquare, Users, Zap, TrendingUp, Sparkles, Check } from 'lucide-react';
import { strengthsData } from '../data/portfolioData';

export default function Strengths() {
  const iconMap = {
    MessageSquare: <MessageSquare size={26} />,
    Users: <Users size={26} />,
    Zap: <Zap size={26} />,
    TrendingUp: <TrendingUp size={26} />
  };

  return (
    <section id="strengths" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <span className="dot"></span>
            <span>Core Soft Skills & Mindset</span>
          </div>
          <h2 className="section-title">
            What I <span className="gradient-text">Bring</span>
          </h2>
          <p className="subheading-text">
            Personal attributes and interpersonal strengths that drive my collaboration, continuous learning, and adaptability.
          </p>
        </div>

        {/* 4 Strengths Grid */}
        <div className="strengths-grid">
          {strengthsData.map((strength) => (
            <div key={strength.id} className="strength-card">
              <div className="strength-header">
                <div 
                  className="strength-icon-badge"
                  style={{
                    backgroundColor: `${strength.color}15`,
                    border: `1px solid ${strength.color}35`,
                    color: strength.color
                  }}
                >
                  {iconMap[strength.icon] || <Sparkles size={24} />}
                </div>
                <span className="strength-pill">{strength.badge}</span>
              </div>

              <div>
                <h3 className="strength-title" style={{ marginBottom: '8px' }}>
                  {strength.title}
                </h3>
                <p className="strength-desc">
                  "{strength.description}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
